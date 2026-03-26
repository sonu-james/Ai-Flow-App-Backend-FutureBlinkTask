import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sonupjames_db_user:AMC1FgjEu11Wy3CH@cluster0.xxzcs1x.mongodb.net/?appName=Cluster0");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;