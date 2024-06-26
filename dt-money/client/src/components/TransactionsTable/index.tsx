import imagem_fechar from '../../assets/fechar.svg';
import { Container } from './styles';
import { useTransactions } from '../../hooks/useTransactions';


export function TransactionsTable(){
    const { transactions, getTransactions, deleteTransaction } = useTransactions();

    async function loadApiData(){
        await getTransactions();
    }

    loadApiData();
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th>Deletar</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key = {transaction.id}>
                                <td> {transaction.title} </td>
                                <td className = {transaction.type}> {
                                    new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)
                                } </td>
                                <td> {transaction.category} </td>
                                <td> {
                                    new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createdAt)
                                )} </td>
                                <td>
                                    <button onClick = { () => {
                                        deleteTransaction(Number(transaction.id));
                                    }}>
                                        <img src = {imagem_fechar} alt = 'deletar'/>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Container>
    );
}