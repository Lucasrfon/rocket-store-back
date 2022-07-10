import { Router } from 'express';
import validateCheckout from '../middlewares/validateCheckout.js';
import checkoutController from '../controllers/checkoutController.js';

const router = Router();

router.post('/checkout', validateCheckout, checkoutController)

export default router;