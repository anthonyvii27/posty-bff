import { EntityRepository, Repository } from "typeorm";
import { ICreateTweet } from "../interfaces/ITweet";
import { Tweet } from "../models/Tweet";

@EntityRepository(Tweet)
class TweetsRepository extends Repository<Tweet> {
    createAndSave(tweet: ICreateTweet): Promise<Tweet> {
        const entity = this.create(tweet);
        return this.save(entity);
    }
}

export { TweetsRepository };