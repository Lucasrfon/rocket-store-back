import { Router } from 'express';
import { creatUser, loginUser } from '../controllers/authController';
import { validateLogin, validateNewUser } from '../middlewares/validateAuthSchemas';

const router = Router();

router.post('/sign-up', validateNewUser, creatUser);
router.post('/login', validateLogin, loginUser);

export default router;