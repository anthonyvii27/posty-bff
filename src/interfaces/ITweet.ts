export interface ITweet {
    id: string;
    text_content?: string;
    image_content_url?: string;
    origin: string;
    user_id: string;
    created_at: Date;
}