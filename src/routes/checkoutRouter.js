import { Router } from 'express';
import validateCheckout from '../middlewares/validateCheckout.js';
import checkoutController from '../controllers/checkoutController.js';
import { validateToken, validateLogin } from '../middlewares/validateAuths.js';
import { validateNewCart } from '../middlewares/validateCart.js';

const router = Router();

router.post('/checkout', validateToken, validateLogin, validateCheckout, validateNewCart, checkoutController)

export default router;
