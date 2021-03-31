import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import bcrypt from 'bcryptjs';
import { IUser } from "../interfaces/IUser";

@Entity("user")
class User implements IUser {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("varchar", { length: 30 })
    username: string;

    @Column()
    email: string;

    @Column()
    email_verified: boolean;

    @Column()
    password: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    photo_url: string;

    @Column("varchar", { length: 200 })
    bio: string;

    @Column()
    country: string;

    @Column()
    link: string;

    @Column()
    birthdate: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
}

export { User }