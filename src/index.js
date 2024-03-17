//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(` Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
  });

/*import express from "express";
const app = express()(
  //can use semi colon from the starting of async below
  async () => {
    //process.env is used to depict the state of the system environment of our app on initialization
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`);
      app.on("error", (error) => {
        console.log("ERRR: ", error);
        throw error;
      });

      app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("ERROR: ", error);
      throw err;
    }
  }
)();*/
