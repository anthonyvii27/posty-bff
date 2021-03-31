import { NextFunction, Response, Request } from "express";
import winston from "winston";

import Logger from "../infra/logger";

export default class HttpException extends Error {
    status: number;
    message: string;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

export class ErrorHandleMiddleware {
    private logger: winston.Logger;

    constructor() {
        this.logger = Logger.getInstance();
    }

    async errorHandleMiddleware(err: HttpException, req: Request, res: Response, next: NextFunction) {
        if (err) {
            const errContext = {
                status: err.status,
                message: err.message,
                queryString: req.query,
                body: JSON.stringify(req.body),
                baseUrl: req.url
            };
            
            // this.logger.error("errorHandler", { ...errContext });
            const status = err.status || 500;
            const message = err.message || 'Something went wrong';
            res.status(status).send({ status, message });
        }
    }
}
