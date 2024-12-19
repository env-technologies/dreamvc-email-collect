"use server";

import connectDB from "@/lib/mongodb";
import User, { IUser } from "@/models/User";
import AWS from "aws-sdk";

// AWS SES Configuration
const ses = new AWS.SES({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

interface WaitlistInput {
  name: string;
  email: string;
  investmentInterest: string;
}

export async function addToWaitlist({ name, email, investmentInterest }: WaitlistInput) {
  if (!name || !email || !investmentInterest) {
    throw new Error("Name, email, and investment interest are required.");
  }

  if (!process.env.SES_SOURCE_EMAIL) {
    throw new Error("SES_SOURCE_EMAIL is not defined in environment variables.");
  }

  try {
    await connectDB();

    // Check for duplicate email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("Email already registered.");
    }

    // Save user to MongoDB
    const newUser: IUser = new User({ name, email, investmentInterest });
    await newUser.save();

    // Send acknowledgment email via AWS SES
    const params = {
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: `Hello ${name},\n\nThank you for joining our waitlist! We'll keep you updated.\n\nBest regards,\nYour Team`,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Waitlist Confirmation",
        },
      },
      Source: process.env.SES_SOURCE_EMAIL, // Verified email address
    };

    await ses.sendEmail(params).promise();

    return "Successfully added to waitlist!";
  } catch (error: any) {
    console.error("Error in addToWaitlist:", error.message || error);
    throw new Error(error.message || "Failed to add to the waitlist.");
  }
}
