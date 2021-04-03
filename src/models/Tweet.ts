import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ITweet } from "../interfaces/ITweet";

export enum Origin {
    TWEET = "tweet",
    RETWEET = "retweet",
}

@Entity("report")
class Report implements ITweet {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    text_content: string;

    @Column()
    image_content_url: string;

    @Column({
        type: "enum",
        enum: Origin
    })
    origin: Origin          
                   
    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Report }