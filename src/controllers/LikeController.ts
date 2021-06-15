import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { LikeRepository } from '../repository/LikeRepository';

export class LikeController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const likeRepository = getCustomRepository(LikeRepository);

            const { tweet_id } = req.body;
            const user_id = req.userId;
            const like = { tweet_id, user_id };

            const likeAlreadyExists = await likeRepository.findOne(like);

            if(likeAlreadyExists) {
                likeRepository.unlike(like);
                return res.status(200).json({ message: 'Successfully disliked' });
            }

            const entity = await likeRepository.createAndSave(like);

            return res.json(entity);

        } catch(error) {
            next(error);
        }
    }
}