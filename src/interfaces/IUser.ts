export interface IUser {
    id: string;
    username: string;
    email: string;
    email_verified: boolean;
    password: string;
    first_name: string;
    last_name: string;
    photo_url?: string;
    bio?: string;
    country: string;
    link?: string;
    birthdate: Date;
    created_at: Date;
    updated_at?: Date;
}

export interface ICreateUser {
    username: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    country: string;
    birthdate: Date;
}

export interface IUpdateUser {
    username?: string;
    first_name?: string;
    last_name?: string;
    country?: string;
    birthdate?: Date;
    photo_url?: string;
    bio?: string;
    link?: string;
    email_verified?: boolean;
}

export interface IGetUser {
    id?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    photo_url?: string;
}