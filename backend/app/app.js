import express from "express";
import notesRouter from "./routes/notesRouter.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./database/mongoose.js";

dotenv.config();

const app = express();

// database
connectToDatabase();

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/api/v1/", notesRouter);

export default app;
