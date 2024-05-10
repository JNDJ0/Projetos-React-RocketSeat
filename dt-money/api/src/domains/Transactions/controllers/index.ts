import { Router, Request, Response, NextFunction } from "express";
import TransactionsService from "../services/TransactionsService";

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const transactions = await TransactionsService.findAll();
    return res.status(200).json(transactions);
});

router.post('/create', async (req: Request, res: Response, next: NextFunction) => {
    try{
        await TransactionsService.create(req.body);
        res.status(201).json('Transação criada com sucesso!');
    }
    catch(err){
        next(err);
    }
});

router.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
    try{
        await TransactionsService.delete(Number(req.params.id));
        res.status(202).json('Transação ' + req.params.id + ' deletada com sucesso!');
    }
    catch(err){
        next(err);
    }
});

export default router;