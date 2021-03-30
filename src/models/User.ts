import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import bcrypt from 'bcryptjs';

@Entity("user")
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
}

export { User }