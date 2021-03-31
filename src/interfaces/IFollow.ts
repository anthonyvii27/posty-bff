export interface IFollow {
    follower_id: string;
    following_id: string;
    created_at: Date;
}

export interface INewFollow {
    following_id: string;
    follower_id: string;
}