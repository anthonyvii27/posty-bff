import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { AuthController } from './controllers/AuthController';
import { ReportController } from './controllers/ReportController';
import authMiddleware from './middlewares/authMiddleware';

const router = Router();

const userController = new UserController();
const authController = new AuthController();
const reportController = new ReportController();

router.get('/users', authMiddleware, userController.index);
router.post('/users', userController.create);
router.post('/authenticate', authController.authenticate);

router.post('/report', authMiddleware, reportController.create);

export { router };