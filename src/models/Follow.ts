import { CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("follow")
class Follow {
    @PrimaryColumn()
    follower_id: string;

    @PrimaryColumn()
    following_id: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Follow };