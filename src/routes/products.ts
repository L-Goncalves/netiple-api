import express, { Request, Response, Router} from 'express';
const router = express.Router();

router.get('/:uuid', async (req: Request, res: Response) => {
// here we will get a single sample pack
});


router.post('/samples', async (req: Request, res: Response) => {
// here we will have a paginated method that returns a list of sample packs
});


export default router;