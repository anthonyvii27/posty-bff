import * as winston from "winston";

export default abstract class Logger {
    private static logger: winston.Logger;

    public static getInstance(): winston.Logger {
        if (!Logger.logger) {
            Logger.logger = winston.createLogger({
                level: 'info',
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.json(),
                ),
                transports: [
                    new winston.transports.Console()
                ]
            });
        }
        
        return Logger.logger;
    }
}