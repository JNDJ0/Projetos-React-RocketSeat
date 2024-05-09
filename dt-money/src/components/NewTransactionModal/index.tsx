import Modal from 'react-modal';
import close_img from '../../assets/fechar.svg'
import imagem_entrada from "../../assets/entradas.svg"
import imagem_saida from "../../assets/saidas.svg"
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
    
    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
    }

    // const data = {
    //     title,
    //     value,
    //     category,
    //     type
    // }

    // api.post('/transactions', data);

    return (<Modal 
        isOpen = {isOpen} 
        onRequestClose = {onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
    >   
        <button 
            type = 'button' 
            onClick = {onRequestClose} 
            className = 'react-modal-close'
        >
            <img src={close_img} alt="Fechar modal" />
        </button>

        <Container onSubmit = {handleCreateNewTransaction}> 
            <h2>Cadastrar transação</h2>

            <input 
                placeholder = 'Título' 
                value = {title} 
                onChange = {event => setTitle(event.target.value)}
            />

            <input 
                placeholder = 'Valor' 
                type = 'number'
                value = {value}
                onChange = {event => setValue(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox 
                    type = 'button'
                    isActive = {type === 'deposit'}
                    activeColor = 'green'
                    onClick = { () => setType('deposit') }
                >
                    <img src = {imagem_entrada} alt = 'Entrada' />
                    <span> Entrada </span>
                </RadioBox>

                <RadioBox 
                    type = 'button'
                    isActive = {type === 'withdraw'}
                    activeColor = 'red'
                    onClick = { () => setType('withdraw') }
                >
                    <img src = {imagem_saida} alt = 'Saída' />
                    <span> Saída </span>
                </RadioBox>
            </TransactionTypeContainer>

            <input 
                placeholder = 'Categoria'
                value = {category}
                onChange = {event => setCategory(event.target.value)}
            />

            <button type="submit"> Cadastrar </button>
        </Container>
    </Modal>);
}