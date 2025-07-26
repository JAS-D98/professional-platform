import express from "express";
import { createReview, getAllReviews } from "../controllers/reviews.controller.js";

const router = express.Router();

router.post("/", createReview);
router.get("/", getAllReviews);

const reviewRoutes=router;
export default reviewRoutes;
