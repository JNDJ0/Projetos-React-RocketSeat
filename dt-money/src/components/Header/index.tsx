import logo_img from '../../assets/logo.svg'
import { Container, Content } from './styles';

export function Header(){
    return (
        <Container>
            <Content>
                <img src={logo_img} alt="dt-money" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}