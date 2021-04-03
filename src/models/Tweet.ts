import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ITweet } from "../interfaces/ITweet";

@Entity("tweets")
class Tweet implements ITweet {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    text_content: string;

    @Column()
    image_content_url: string;

    @Column()
    origin: string;        
                   
    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Tweet }