import express from "express";
import { login, logout, register } from "../controllers/auth.js";
import { verifyAdmin } from "../utils/verifytoken.js";

// Create a new router
const router = express.Router();

// Register
router.post("/register", register)
// Login route
router.post("/login", login)
// Logout route
router.post("/logout", logout)

export default router;