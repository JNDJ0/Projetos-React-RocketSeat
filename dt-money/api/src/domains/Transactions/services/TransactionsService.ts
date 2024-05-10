import { prisma } from "../../../../config/client";

interface Transactions {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string,
}

class TransactionsService {
    async create(data: Transactions){
        const created_at = (new Date()).toISOString();
        const transaction = await prisma.transactions.create({
            data: {
                title: data.title,
                amount: Number(data.amount),
                type: data.type,
                category: data.category,
                createdAt: created_at
            }
        })

        return transaction;
    }

    async findAll(){
        const transactions = await prisma.transactions.findMany();

        return transactions;
    }

    async delete(id: number){
        const transaction = await prisma.transactions.findUnique({
            where: {
                id: id
            }
        })
        if (!transaction){
            throw new Error('Transação não encontrada!');
        }
        await prisma.transactions.delete({
            where: {
                id: id
            }
        })

        return;
    }

    async update(id: number, data: Transactions){
        const transaction = await prisma.transactions.update({
            where: {
                id: id
            },
            data: {
                title: data.title,
                amount: data.amount,
                type: data.type,
                category: data.category,
                createdAt: data.createdAt
            }
        })

        return transaction;
    }
}

export default new TransactionsService();