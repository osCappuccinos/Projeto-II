import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createClient } from '../service/firebase/useFirebaseClients';
import './Sign.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const navigate = useNavigate(); // Adiciona o useNavigate

    const handleSignUp = (e) => {
        e.preventDefault();
        createClient(name, email, password, (error) => {
            if (error) {
                if (error.code === 'auth/email-already-in-use') {
                    setFeedbackMessage('Já existe um usuário cadastrado com este e-mail.');
                } else {
                    setFeedbackMessage('Erro ao cadastrar: ' + error.message);
                }
            } else {
                // Redireciona para a página /user após cadastro bem-sucedido
                navigate('/user');
            }
        });
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSignUp}>
                <input 
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
            {feedbackMessage && <p>{feedbackMessage}</p>}
            <p>
                <Link to="/signin">Já possuo cadastro</Link>
            </p>
        </div>
    );
};

export default SignUp;
