import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const Connection = async () => {
  try {
    await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log("database is not connected");
  }
};

export default Connection;
