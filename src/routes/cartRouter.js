import { Router } from 'express';
import { getCart } from '../controllers/cartController.js';
import { validateToken } from '../middlewares/validateAuths.js';

const router = Router();

router.post('/cart', validateToken);
router.get('/cart', validateToken, getCart);
router.put('/cart', validateToken);
router.delete('/cart', validateToken);

export default router;