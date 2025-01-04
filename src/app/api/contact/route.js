// pages/api/contact.js (or app/api/contact/route.js in Next.js 13+)
import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";  // Ensure connectDB is properly set up
import Contact from "@/app/models/contact";  // Ensure your Contact model is properly defined
import mongoose from "mongoose";

// POST Handler
export async function POST(req) {
  try {
    // Parse request body
    const { fullname, email, message } = await req.json();

    // Validation
    if (!fullname || !email || !message) {
      return NextResponse.json({ msg: "All fields are required", success: false }, { status: 400 });
    }

    // Connect to MongoDB
    await connectDB();

    // Create a new contact entry in the database
    const newContact = await Contact.create({ fullname, email, message });

    return NextResponse.json({ msg: "Message sent successfully", success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      // If validation error, format error messages
      const errorList = Object.values(error.errors).map((e) => e.message);

      return NextResponse.json({ msg: errorList, success: false }, { status: 400 });
    } else {
      // Return unexpected errors
      return NextResponse.json({ msg: error.message || "An error occurred", success: false }, { status: 500 });
    }
  }
}
