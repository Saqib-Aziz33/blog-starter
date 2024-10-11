import { NextFunction, Request, Response } from "express";
import Blog from "models/blog.model";

export async function renderHome(
  _: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const blogs = await Blog.findAll();
    res.render("blogs/index", { blogs });
  } catch (error) {
    next(error);
  }
}

export function renderCreate(_: Request, res: Response) {
  res.render("blogs/new");
}

export async function createBlog(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(req.body);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
}

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
