import { Router } from 'express';
import validateCheckout from '../middlewares/validateCheckout.js';
import checkoutController from '../controllers/checkoutController.js';
import { validateToken } from '../middlewares/validateAuths.js';

const router = Router();

router.post('/checkout', validateToken, validateCheckout, checkoutController)

export default router;
