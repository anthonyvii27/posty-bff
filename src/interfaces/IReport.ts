export interface IReport {
    id: string;
    userId: string;
    content: string;
    created_at: Date;
}

export interface ICreateReport {
    userId: string;
    content: string;
}