import express from 'express';
import { createCattegory,getAllCattegory,getCategoryById, deleteCattegory,} from '../controller/cattegory.controller.js';

const router = express.Router();

router.post('/add', createCattegory);
router.get('/view', getAllCattegory);
router.get('/:id',getCategoryById)
// router.put('/update/:slug', updateCattegory);
router.delete('/delete/:slug', deleteCattegory);

export default router;
