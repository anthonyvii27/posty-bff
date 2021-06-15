import { EntityRepository, Repository } from "typeorm";
import { INewLike, ILike } from "../interfaces/ILike";
import { Like } from "../models/Like";

@EntityRepository(Like)
class LikeRepository extends Repository<Like> {
    createAndSave(like: INewLike): Promise<ILike> {
        const entity = this.create(like);
        return this.save(entity);
    }
}

export { LikeRepository };