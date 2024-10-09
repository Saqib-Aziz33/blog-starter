import { Request, Response } from "express";

export function renderHome(_: Request, res: Response) {
  res.render("index");
}

export function handler(_: Request, res: Response) {
  // pass
}
