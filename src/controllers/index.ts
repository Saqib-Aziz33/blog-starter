import { NextFunction, Request, Response } from "express";

export function handler(_: Request, res: Response) {
  // pass
}

export async function asyncHandler(
  _: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // pass
  } catch (error) {
    next(error);
  }
}
