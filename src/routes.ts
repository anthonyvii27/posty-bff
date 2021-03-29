import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('Inserindo arquivo de routes'));

export { router };