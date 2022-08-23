import express, { Request, Response, Router} from 'express';
const router = express.Router();
import {insertUser} from '../services/auth'
router.post('/', async (req: Request, res: Response) => {
  const response = await insertUser(req.body)
  res.send(response)
});



export default router;