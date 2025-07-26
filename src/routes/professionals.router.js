import express from "express";
import { createProfessional, getAllProfessionals, getProfessionalById } from "../controllers/professionals.controller.js";

const router = express.Router();


router.post("/", createProfessional);
router.get("/", getAllProfessionals);
router.get("/:id", getProfessionalById);

const professionalRoutes=router
export default professionalRoutes;
