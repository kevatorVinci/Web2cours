import express, { ErrorRequestHandler } from "express";
import filmRouter from "./routes/films";

const app = express();

let getRequestConuter = 0;

app.use((_req, _res, next) => {
  if (_req.method === "GET") {
    getRequestConuter++;
  }

  console.log("Get counter:", getRequestConuter);
  next();
});

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
};

app.use(errorHandler);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films", filmRouter);

export default app;
