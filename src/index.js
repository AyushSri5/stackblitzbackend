import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error is", error);
    });
  } catch (err) {
    console.log("Error is:", err);
  }
})();
