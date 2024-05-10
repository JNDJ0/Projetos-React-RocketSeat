import Modal from 'react-modal';
import imagem_saida from '../../assets/saidas.svg'
import imagem_fechar from '../../assets/fechar.svg'
import imagem_entrada from '../../assets/entradas.svg'
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const { createTransaction } = useTransactions();
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
    
    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        });
        
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    return (<Modal 
        isOpen = {isOpen} 
        onRequestClose = {onRequestClose}
        overlayClassName = 'react-modal-overlay'
        className = 'react-modal-content'
    >   
        <button 
            type = 'button' 
            onClick = {onRequestClose} 
            className = 'react-modal-close'
        >
            <img src={imagem_fechar} alt='Fechar modal' />
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
                value = {amount}
                onChange = {event => setAmount(Number(event.target.value))}
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

            <button type = 'submit' onClick = {handleCreateNewTransaction}> Cadastrar </button>
        </Container>
    </Modal>);
}