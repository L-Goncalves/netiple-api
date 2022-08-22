import express, { Request, Response, Router} from 'express';
const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    console.log(req.body)
  res.send('Sign Up!')
});



export default router;