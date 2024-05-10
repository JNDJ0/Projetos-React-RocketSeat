import cors from 'cors';
import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import TransacionsRouter from '../src/domains/Transactions/controllers/index';

export const app: Express = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.use('/api/transactions', TransacionsRouter);

export default app;