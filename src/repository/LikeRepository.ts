import { EntityRepository, Repository } from "typeorm";
import { INewLike, ILike, IUnlike } from "../interfaces/ILike";
import { Like } from "../models/Like";

@EntityRepository(Like)
class LikeRepository extends Repository<Like> {
    async createAndSave(like: INewLike): Promise<ILike> {
        const entity = await this.create(like);
        return await this.save(entity);
    }

    async unlike(like: IUnlike): Promise<void> {
        const entity = await this.findOne(like);
        await this.remove(entity);
    }
}

export { LikeRepository };