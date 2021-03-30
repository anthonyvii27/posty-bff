import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from './User';

@Entity("report")
class Report {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    userId: string;

    // @ManyToOne(() => User, user => user.id)
    // user: User;

    @Column()
    content: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Report }