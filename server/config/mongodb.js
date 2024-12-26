import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connected to Database");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/PixScribe`);
};

export default connectDB;