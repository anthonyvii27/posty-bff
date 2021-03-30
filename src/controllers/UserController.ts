import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repository/UserRepository';

export class UserController {
    async index(req: Request, res: Response) {
        res.send({ userID: req.userId })
    }
    
    async create(req: Request, res: Response) {
        const { 
            username,
            email, 
            password,
            first_name,
            last_name,
            country,
            birthdate
        } = req.body;
     
        const userRepository = getCustomRepository(UsersRepository);
        
        const userAlreadyExists = await userRepository.findOne({ email });
        
        if(userAlreadyExists) {
            return res.status(409).json({
                error: "User already exists!"
            });
        }

        const user = await userRepository.create({ 
            username, 
            email, 
            password, 
            first_name, 
            last_name,
            country, 
            birthdate 
        });
        
        await userRepository.save(user);

        return res.json(user);
    }
}