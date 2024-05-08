import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable(){
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data));
    }, []);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td> Desenvolvimento de site </td>
                        <td className="deposit"> R$ 12000,00 </td>
                        <td> Desenvolvimento </td>
                        <td> 28/08/2022 </td>
                    </tr>
                    
                    <tr>
                        <td> Aluguel </td>
                        <td className="withdraw"> - R$ 1100,00 </td>
                        <td> Casa </td>
                        <td> 09/11/2021 </td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}