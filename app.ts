import  express, {Application, Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import auth from './src/routes/auth'
const app: Application = express()
const port = 3000


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.json({limit: '50mb'}));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})


app.use('/signup', auth)



app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})



