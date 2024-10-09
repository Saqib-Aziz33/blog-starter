import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";

function middlewares(app: Express) {
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "..", "..", "views"));
  app.use(express.static(path.join(__dirname, "../../public")));
  app.use(cors());
  app.use(morgan("tiny"));
}

export default middlewares;
