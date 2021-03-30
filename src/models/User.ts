import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import bcrypt from 'bcryptjs';

@Entity("user")
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
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

    @Column()
    bio: string;

    @Column()
    country: string;

    @Column()
    link: string;

    @Column()
    birthdate: Date;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
}

export { User }