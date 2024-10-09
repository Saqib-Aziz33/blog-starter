import { Router } from "express";
import { renderHome } from "../controllers/index.controller";

const router = Router();

router.get("/", renderHome);

export default router;
