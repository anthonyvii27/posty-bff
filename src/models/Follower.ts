import { CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("followers")
class Follower {
    @PrimaryColumn()
    follower_id: string;

    @PrimaryColumn()
    following_id: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Follower };