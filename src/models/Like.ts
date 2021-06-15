import { CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("like")
class Like {
    @PrimaryColumn()
    tweet_id: string;

    @PrimaryColumn()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Like };