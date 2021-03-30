import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repository/UserRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthController {
    async authenticate(req: Request, res: Response) {
        const repository = getCustomRepository(UsersRepository);
        const { email, password } = req.body;

        const user = await repository.findOne({ where: { email } });

        if(!user) {
            return res.sendStatus(401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) {
            return res.sendStatus(401);
        }

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

        delete user.password;

        return res.json({ user, token });
    }
}