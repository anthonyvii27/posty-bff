import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { ICreateTweet } from '../interfaces/ITweet';
import { TweetsRepository } from '../repository/TweetRepository';

export class TweetController {
    async getTweetsByUserLogged(req: Request, res: Response) {
        const tweetRepository = getCustomRepository(TweetsRepository);

        const tweets = await tweetRepository.query(`
            SELECT id, username, first_name, last_name, photo_url, tweet_id, text_content, image_content_url, origin, tweets.created_at FROM public."user"
            JOIN tweets ON user_id = $1
            WHERE id = user_id
        `, [req.userId]);

        return res.json(tweets);
    }

    async getTweetsBySpecificUser(req: Request, res: Response) {
        const tweetRepository = getCustomRepository(TweetsRepository);

        const { user_id } = req.params;

        const tweets = await tweetRepository.query(`
            SELECT id, username, first_name, last_name, photo_url, tweet_id, text_content, image_content_url, origin, tweets.created_at FROM public."user"
            JOIN tweets ON user_id = $1
            WHERE id = user_id
        `, [user_id]);

        return res.json(tweets);
    }

    async create(req: Request, res: Response) {
        const { text_content, image_content_url, origin } = req.body;
        const user_id = req.userId;

        const tweetRepository = getCustomRepository(TweetsRepository);

        const tweet: ICreateTweet = { text_content, image_content_url, origin, user_id };
        const entity = await tweetRepository.createAndSave(tweet);

        return res.json(entity);
    }
}