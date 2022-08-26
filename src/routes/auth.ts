import express, { Request, Response, Router} from 'express';
const router = express.Router();
import {insertUser, login} from '../services/auth'

router.post('/signup', async (req: Request, res: Response) => {
  const response = await insertUser(req.body)
  res.send(response)
});


router.post('/login', async (req: Request, res: Response) => {
  const response = await login(req.body)
  res.send(response)
});


export default router;