import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Routes
const test = (req: Request, res: Response) => {
  res.send("Hello there....");
};
app.get("/", test);

export default app;
