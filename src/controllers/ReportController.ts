import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { ReportsRepository } from '../repository/ReportRepository';

export class ReportController {
    async create(req: Request, res: Response) {
        const { content } = req.body;
        const userId = req.userId;

        const reportRepository = getCustomRepository(ReportsRepository);

        const report = { content, userId };
        const entity = await reportRepository.createAndSave(report);

        return res.json(entity);
    }
}