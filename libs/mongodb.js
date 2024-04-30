import mongoose from "mongoose"; //3AhoObTCzYwYJflo


const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kreifeur669:3AhoObTCzYwYJflo@cluster0.uigt1el.mongodb.net/sample_mflix');

    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log('error');
  }
};

export default connectMongoDB;