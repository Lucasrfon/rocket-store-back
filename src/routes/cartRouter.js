import { Router } from 'express';
import { cartUpdate, deleteCart, getCart, postCart } from '../controllers/cartController.js';
import { validateToken } from '../middlewares/validateAuths.js';
import { validateCartUpdate, validateNewCart } from '../middlewares/validateCart.js';

const router = Router();

router.post('/cart', validateToken, validateNewCart, postCart);
router.get('/cart', validateToken, getCart);
router.put('/cart', validateToken, validateCartUpdate, cartUpdate);
router.delete('/cart', validateToken, deleteCart);

export default router;