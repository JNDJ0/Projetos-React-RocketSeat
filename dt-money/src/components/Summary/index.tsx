import { Container } from "./styles";
import imagem_entrada from "../../assets/entradas.svg"
import imagem_saida from "../../assets/saidas.svg"
import imagem_total from "../../assets/total.svg"

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={imagem_entrada} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={imagem_saida} alt="Saidas" />
                </header>
                <strong>-R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={imagem_total} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );
}