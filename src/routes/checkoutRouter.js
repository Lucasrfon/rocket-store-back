import { Router } from 'express';
import validateRegister from '../middlewares/validateCheckout.js';
import checkoutController from '../controllers/checkoutController.js';

const router = Router();

router.post('/checkout', validateRegister, checkoutController)

export default router;
