import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
    process.exit(1); // Exit the process with a failure status
  }
};
export default connectDB;
