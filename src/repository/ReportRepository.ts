import { EntityRepository, Repository } from "typeorm";
import { ICreateReport } from "../interfaces/IReport";
import { Report } from "../models/Report";

@EntityRepository(Report)
class ReportsRepository extends Repository<Report> {
    createAndSave(report: ICreateReport): Promise<Report> {
        const entity = this.create(report);
        return this.save(entity);
    }
}

export { ReportsRepository }