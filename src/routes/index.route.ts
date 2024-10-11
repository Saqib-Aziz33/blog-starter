import { Router } from "express";
import {
  createBlog,
  renderCreate,
  renderHome,
} from "../controllers/index.controller";

const router = Router();

router.get("/", renderHome);
router.route("/new").get(renderCreate).post(createBlog);

export default router;
