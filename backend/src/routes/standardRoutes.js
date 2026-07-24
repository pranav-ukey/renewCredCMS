import express from "express";
import {
  createStandard,
  getAllStandards,
  getStandardBySlug,
  updateStandard,
  deleteStandard,
} from "../controllers/standardController.js";

const router = express.Router();

router.post("/", createStandard);
router.get("/", getAllStandards);
router.get("/:slug", getStandardBySlug);

router.put("/:id", updateStandard);
router.delete("/:id", deleteStandard);

export default router;