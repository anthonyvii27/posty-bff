import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { AuthController } from './controllers/AuthController';
import authMiddleware from './middlewares/authMiddleware';

const router = Router();

const userController = new UserController();
const authController = new AuthController();

router.get('/users', authMiddleware, userController.index);
router.post('/users', userController.create);
router.post('/authenticate', authController.authenticate);

export { router };