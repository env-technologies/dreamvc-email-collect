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
  try {
    // ✅ Validate input
    if (!name || !email) {
      return { success: false, message: "Name and email are required." };
    }

    // ✅ Connect to the database
    await connectDB();

    // ✅ Normalize the email (remove spaces, lowercase)
    const normalizedEmail = email.trim().toLowerCase();

    // ✅ Check if the email already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return { success: false, message: "Email already registered." };
    }

    // ✅ Save the user to the database
    const newUser: IUser = new User({ name, email: normalizedEmail });
    await newUser.save();

    // ✅ Send confirmation email using AWS SES
    const params = {
      Destination: { ToAddresses: [normalizedEmail] },
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
      Source: process.env.SES_SOURCE_EMAIL!,
    };

    await ses.sendEmail(params).promise();

    // ✅ Success Response
    return { success: true, message: "Successfully added to the waitlist!" };

  } catch (error) {
    console.error("Error in addToWaitlist:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
