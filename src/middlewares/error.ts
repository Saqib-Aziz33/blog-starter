import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export default function errorHandler(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  res.status(500).send("something went wrong");
}
