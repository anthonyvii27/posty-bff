import 'reflect-metadata';
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import './database';
import { router } from './routes';
import { ApplicationEnvironment } from './settings/settings';

dotenv.config();

if (!ApplicationEnvironment.Port) {
    process.exit(1);
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export { app };