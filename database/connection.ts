const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
        dbName: `chatbot`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Database connection works!!!');
  } catch (error) {
    console.log(error);
    throw new Error("Error while trying to connect database");
  }
};

export default dbConnection;
