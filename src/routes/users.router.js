import {Router} from "express";
import { createUser, getAllUsers } from "../controllers/users.controller.js";

const router = Router();

router.post("/", createUser);
router.get("/", getAllUsers);

const userRoutes=router
export default userRoutes;
