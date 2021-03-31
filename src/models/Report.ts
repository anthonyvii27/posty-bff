import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IReport } from "../interfaces/IReport";

@Entity("report")
class Report implements IReport {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    userId: string;

    @Column()
    content: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Report }