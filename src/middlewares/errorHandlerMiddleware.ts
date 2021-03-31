import { NextFunction, Response, Request } from "express";

class HttpException extends Error {
    status: number;
    message: string;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

export default HttpException;

export class ErrorHandleMiddleware {
    async errorHandleMiddleware(err: HttpException, req: Request, res: Response, next: NextFunction) {
        if (err) {
            const status = err.status || 500;
            const message = err.message || 'Something went wrong';
            res.status(status).send({status, message});
        }
    }
}
