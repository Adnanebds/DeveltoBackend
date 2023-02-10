// NPM packagess
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

// Import routes
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import familiesRoute from "./routes/families.js";
import leveranciersRoute from "./routes/leveranciers.js";
import productsRoute from "./routes/products.js";
import voedselpakketRoute from "./routes/voedselpakket.js";

// Create an express application
const app = express();
 //configure environment variables
dotenv.config();

// Connection to MongoDB
const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// Middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());
// Routes
app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/families", familiesRoute);
app.use("/leveranciers", leveranciersRoute);
app.use("/products", productsRoute);
app.use("/voedselpakket", voedselpakketRoute);

// Global error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Port connection
app.listen(8800, () => {
  connect();
  console.log("Connected to Port:8800.");
});
