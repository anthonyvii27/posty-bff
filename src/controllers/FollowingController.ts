import { Request, Response } from 'express';
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

    async getFollowingListByUserLogged(req: Request, res: Response) {
        const followRepository = getCustomRepository(FollowRepository);
        const userRepository = getCustomRepository(UsersRepository);

        const followingList = await followRepository.find({ follower_id: req.userId });

        let followingListFormatted = [];

        for(let item of followingList) {
            const { following_id } = item;
            const user = await userRepository.findOne({ id: following_id });

            const formattedUser: IGetUser = {
                username: user?.username,
                first_name: user?.first_name,
                last_name: user?.last_name,
                photo_url: user?.photo_url,
            }

            followingListFormatted.push(formattedUser);
        }

        return res.json(followingListFormatted);
    }

    async getFollowingListBySpecificUser(req: Request, res: Response) {
        const followRepository = getCustomRepository(FollowRepository);
        const userRepository = getCustomRepository(UsersRepository);

        const { follower_id } = req.params;

        const followingList = await followRepository.find({ follower_id });

        let followingListFormatted = [];

        for(let item of followingList) {
            const { following_id } = item;
            const user = await userRepository.findOne({ id: following_id });

            const formattedUser: IGetUser = {
                username: user?.username,
                first_name: user?.first_name,
                last_name: user?.last_name,
                photo_url: user?.photo_url
            }

            followingListFormatted.push(formattedUser);
        }

        return res.json(followingListFormatted);
    }
}