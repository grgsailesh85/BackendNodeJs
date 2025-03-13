import mongoose from "mongoose";
async function connectDB() {
  try {
    // database connection
    const status = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connnectd: ${status.connection.host}`);
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;
