import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@clone-inshorts.8vcajqm.mongodb.net/`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting the database", error);
  }
};

export default Connection;
