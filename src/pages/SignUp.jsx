import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { createClient } from '../service/firebase/useFirebaseClients'; // Importe a função createClient
import './Sign.css'

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        createClient(name, email, password, (error) => {
            if (error) {
                // Verifica se o erro é devido a um e-mail já existente
                if (error.code === 'auth/email-already-in-use') {
                    setFeedbackMessage('Já existe um usuário cadastrado com este e-mail.');
                } else {
                    setFeedbackMessage('Erro ao cadastrar: ' + error.message);
                }
            } else {
                setFeedbackMessage('Cadastro realizado com sucesso!');
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
