import express from 'express';
import { createProduct, getAllProduct, getProductById, deleteProduct,updateProduct } from '../controller/product.controller.js';

const router = express.Router();

router.post('/add', createProduct);
router.get('/view', getAllProduct);
router.get('/:id', getProductById);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;
