import { api } from '../services/api';
import { ReactNode, createContext, useContext, useState } from 'react';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
    getTransactions: () => Promise<void>;
    deleteTransaction: (id: number) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function getTransactions() {
        const response = await api.get('transactions');
        setTransactions(response.data);
    }
    
    async function createTransaction(transaction_input: TransactionInput){
        console.log(transaction_input);
        await api.post('transactions/create', {
            ...transaction_input,
            createdAt: new Date(),        
        });
    }

    async function deleteTransaction(id: number){
        await api.delete(`transactions/delete/${id}`);
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    }

    return (
        <TransactionsContext.Provider value = {{ 
            transactions, 
            createTransaction, 
            getTransactions, 
            deleteTransaction 
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext);
    return context;
}  