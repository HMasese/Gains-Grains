import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { nutritionRouter } from './nutrition_api.js';

const router = Router();

router.use('/users', userRouter);
router.use('/nutrition', nutritionRouter);

export default router;
