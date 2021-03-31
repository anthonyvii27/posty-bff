import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { IGetUser } from '../interfaces/IUser';
import { FollowRepository } from '../repository/FollowRepository';
import { UsersRepository } from '../repository/UserRepository';

export class FollowingController {
    async create(req: Request, res: Response) {
        const followRepository = getCustomRepository(FollowRepository);
        const { following_id } = req.body;
        const follower_id = req.userId;

        const follow = { following_id, follower_id };

        const followAlreadyExists = await followRepository.findOne({ following_id, follower_id });

        if(followAlreadyExists) {
            return res.status(409).json({
                error: "User already followed!"
            });
        }

        const entity = await followRepository.createAndSave(follow);
        
        return res.json(entity);
    }

    async getFollowingListByUserLogged(req: Request, res: Response, next: NextFunction) {
        try {
            const userRepository = getCustomRepository(UsersRepository);

            const followingList: IGetUser = await userRepository.query(`
                SELECT id, username, first_name, last_name, photo_url FROM public."user"
                JOIN follow ON follower_id=$1
                WHERE id=following_id
            `, [req.userId]); 
    
            return res.json(followingList);

        } catch(error) {
            next(error);
        }
    }

    async getFollowingListBySpecificUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userRepository = getCustomRepository(UsersRepository);

            const { follower_id } = req.params;
    
            const followingList: IGetUser = await userRepository.query(`
                SELECT id, username, first_name, last_name, photo_url FROM public."user"
                JOIN follow ON follower_id=$1
                WHERE id=following_id
            `, [follower_id]);
    
            return res.json(followingList);

        } catch(error) {
            next(error);
        }
    }
}