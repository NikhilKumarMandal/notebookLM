import express, { Request, Response } from "express";
import { globalErrorHandler } from "./common/middleware/globalErrorHandler";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";


const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(mongoSanitize());


app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from order service service!" });
});

app.use(globalErrorHandler);

export default app;
