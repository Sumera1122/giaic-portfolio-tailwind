import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Check if we are already connected
    if (mongoose.connection.readyState === 0) {
      console.log("Connecting to MongoDB...");
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected successfully");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to the database");
  }
};

export default connectDB;
