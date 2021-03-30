import { EntityRepository, Repository } from "typeorm";
import { ICreateUser, IUser } from "../interfaces/IUser";
import { User } from "../models/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {
    createAndSave(user: ICreateUser): Promise<IUser> {
        const entity = this.create(user);
        return this.save(entity);
    }
}

export { UsersRepository }