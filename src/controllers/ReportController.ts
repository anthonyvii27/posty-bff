import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { ReportsRepository } from '../repository/ReportRepository';

export class ReportController {
    async create(req: Request, res: Response) {
        const { content } = req.body;
        const userId = req.userId;

        const reportRepository = getCustomRepository(ReportsRepository);

        const report = reportRepository.create({ content, userId });

        await reportRepository.save(report);

        return res.json(report);
    }
}