import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { INewLike } from '../interfaces/ILike';
import { IGetUser } from '../interfaces/IUser';
import { LikeRepository } from '../repository/LikeRepository';
import { UsersRepository } from '../repository/UserRepository';

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
                return res.send('Unlike ok');
            }

            const entity = await likeRepository.createAndSave(like);

            return res.json(entity);

        } catch(error) {
            next(error);
        }
    }
}