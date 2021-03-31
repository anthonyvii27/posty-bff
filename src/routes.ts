import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { AuthController } from './controllers/AuthController';
import { ReportController } from './controllers/ReportController';
import { FollowingController } from './controllers/FollowingController';
import authMiddleware from './middlewares/authMiddleware';

const router = Router();

const userController = new UserController();
const authController = new AuthController();
const reportController = new ReportController();
const followingController = new FollowingController();

router.get('/users', authMiddleware, userController.index);
router.post('/users', userController.create);
router.post('/authenticate', authController.authenticate);

router.post('/report', authMiddleware, reportController.create);

router.get('/follow', authMiddleware, followingController.getFollowingListByUserLogged);
router.get('/follow/:follower_id', authMiddleware, followingController.getFollowingListBySpecificUser)
router.post('/follow', authMiddleware, followingController.create);

export { router };