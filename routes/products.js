import express from "express";
import{ createProduct, updateProduct, deleteProduct, getProduct, getProducts }from '../controllers/product.js';
import { verifyAdmin, verifyDMM, verifyUser } from "../utils/verifytoken.js";

// Create a new router
const router = express.Router();

// Create
router.post('/', verifyDMM, createProduct);
// Get all
router.get('/', verifyUser, getProducts);
// Get
router.get('/:id', verifyUser, getProduct);
// Update
router.put('/:id', verifyUser, updateProduct);
// Delete
router.delete('/:id', verifyAdmin, deleteProduct);

export default router;