import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { ICreateTweet } from '../interfaces/ITweet';
import { TweetsRepository } from '../repository/TweetRepository';

export class TweetController {
    async create(req: Request, res: Response) {
        const { text_content, image_content_url, origin } = req.body;
        const user_id = req.userId;

        const tweetRepository = getCustomRepository(TweetsRepository);

        const tweet: ICreateTweet = { text_content, image_content_url, origin, user_id };
        const entity = await tweetRepository.createAndSave(tweet);

        return res.json(entity);
    }
}