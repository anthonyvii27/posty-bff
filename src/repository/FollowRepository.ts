import { EntityRepository, Repository } from "typeorm";
import { INewFollow, IFollow, IFollowingList } from "../interfaces/IFollow";
import { Follow } from "../models/Follow";

@EntityRepository(Follow)
class FollowRepository extends Repository<Follow> {
    createAndSave(follow: INewFollow): Promise<IFollow> {
        const entity = this.create(follow);
        return this.save(entity);
    }
}

export { FollowRepository };