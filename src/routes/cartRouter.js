import { Router } from 'express';

const router = Router();

router.post('/cart');
router.get('/cart');
router.put('/cart');
router.delete('/cart');

export default router;