import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Success connecting to database");
  } catch (err) {
    console.log("Error connecting to the database: " + err);
  }
}

export default connectToDatabase;
