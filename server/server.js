import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import transactionRoutes from "./routes/transactionRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

/* Routes */
app.use("/api/auth", authRoutes);

app.use(
  "/api/transactions",
  authMiddleware,
  transactionRoutes
);

/* MongoDB Connection */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log(
      "MongoDB Connected"
    );

    app.listen(5000, () => {

      console.log(
        "Server running on port 5000"
      );

    });

  })
  .catch((err) => {

    console.log(err);

  });