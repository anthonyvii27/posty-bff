export interface ITweet {
    tweet_id: string;
    text_content?: string;
    image_content_url?: string;
    origin: string;
    user_id: string;
    created_at: Date;
}

export interface ICreateTweet {
    text_content?: string;
    image_content_url?: string;
    origin: string;
    user_id: string;
}