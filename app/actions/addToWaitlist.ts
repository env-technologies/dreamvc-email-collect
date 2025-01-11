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
}

export async function addToWaitlist({ name, email }: WaitlistInput) {
  if (!name || !email) {
    throw new Error("Name, email are required.");
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
    const newUser: IUser = new User({ name, email });
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
            Data: `Hello ${name},\n\nThank you for joining our waitlist! We'll keep you updated.\n\nBest regards,\nAfrica Investment Report`,
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
  } catch (error) {
    console.error("Error in addToWaitlist:", error instanceof Error ? error.message : error);
    throw new Error(error instanceof Error ? error.message : "Failed to add to the waitlist.");
  }
}
