import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { Follow } from '../models/Follow';
import { FollowRepository } from '../repository/FollowRepository';

export class FollowingController {
    async create(req: Request, res: Response) {
        const { following_id } = req.body;
        const follower_id = req.userId;

        const followRepository = getCustomRepository(FollowRepository);
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

    async getFollowingListByLoggedUser(req: Request, res: Response) {
        const followRepository = getCustomRepository(FollowRepository);
        const followingList = await followRepository.find({ follower_id: req.userId });
        return res.json(followingList);
    }

    async getFollowingListBySpecificUser(req: Request, res: Response) {
        const { follower_id } = req.params;
        const followRepository = getCustomRepository(FollowRepository);
        const followingList = await followRepository.find({ follower_id });
        return res.json(followingList);
    }
}