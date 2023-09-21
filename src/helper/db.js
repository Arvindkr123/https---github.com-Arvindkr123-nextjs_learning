import { User } from "@/models/user";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "work_manager",
    });
    console.log("Database connected ...........");
    // console.log(connection);
    // const user = new User({
    //   name: "Arvind Kumar",
    //   email: "thakurarvindkr10@gmail.com",
    //   password: "123",
    //   about: "hello world",
    //   profileUrl: "http://www.google.com",
    // });
    // await user.save();
    // console.log("user is Created");
  } catch (error) {
    console.log("failed to connect with database!!");
    console.log(error);
  }
};
