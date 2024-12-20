import express from 'express';
import { createProduct, getAllProduct, getProductById, deleteProduct } from '../controller/product.controller.js';

const router = express.Router();

router.post('/add', createProduct);
router.get('/view', getAllProduct);
router.get('/:id', getProductById);
// router.put('/update/:name', updateProduct);
router.delete('/delete/:name', deleteProduct);

export default router;
