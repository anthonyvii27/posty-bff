import 'reflect-metadata';
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

export { app };