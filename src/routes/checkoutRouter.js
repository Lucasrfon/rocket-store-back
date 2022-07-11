import { Router } from 'express';

import checkoutController from '../controllers/checkoutController.js';

const router = Router();

router.post('/checkout', checkoutController)

export default router;
