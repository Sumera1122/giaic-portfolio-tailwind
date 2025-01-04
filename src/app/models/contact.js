import mongoose, { Schema } from "mongoose";

// Define the schema for the contact form
const contactSchema = new Schema({
  fullname: {
    type: String, // Use String with capital 'S'
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must contain 2 or more characters"],
    maxlength: [50, "Name must contain less than 50 characters"],
  },
  email: {
    type: String, // Use String with capital 'S'
    required: [true, "Email is required"],
    match: [
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i,
      "Invalid email address",
    ],
  },
  message: {
    type: String, // Use String with capital 'S'
    required: [true, "Message field is required"],
  },
  date: {
    type: Date, // Use Date with capital 'D'
    default: Date.now,
  },
});

// Create and export the Contact model
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
