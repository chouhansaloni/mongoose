import express from 'express';
import { createUser,getAllUsers,updateUser,deleteUser,} from '../controller/user.controller.js';

const router = express.Router();

router.post('/add', createUser);
router.get('/view', getAllUsers);
router.put('/update/:name', updateUser);
router.delete('/delete/:name', deleteUser);

export default router;
