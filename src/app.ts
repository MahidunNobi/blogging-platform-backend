import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Application Routes
app.use('api/v1', router);

const test = (req: Request, res: Response) => {
  res.send('Hello there....');
};
app.get('/', test);

export default app;
