import mongoose from "mongoose";

export const dbConnection = () => {
  const uri = process.env.MONGO_URI; 

  mongoose
    .connect(uri, {
      dbName: "restaurant",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error("Error connecting to database:", err.message);
      console.error(err.stack);
    });
};
