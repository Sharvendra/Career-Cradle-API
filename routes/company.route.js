import express from "express";
// import {login, logout, register, updateProfile} from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { getCompanById, getCompany, registerCompany, updateCompany } from "../controllers/company.controller.js";


const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanById);
router.route("/update/:id").put(isAuthenticated, updateCompany);
export default router;