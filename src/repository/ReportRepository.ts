import { EntityRepository, Repository } from "typeorm";
import { Report } from "../models/Report";

@EntityRepository(Report)
class ReportsRepository extends Repository<Report> {}

export { ReportsRepository }