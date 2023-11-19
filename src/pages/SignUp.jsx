import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createClient } from '../service/firebase/useFirebaseClients';
import './Sign.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Usuário já está logado, redireciona para /user
                navigate('/client');
            }
        });

        return () => unsubscribe(); // Limpeza do listener
    }, [auth, navigate]);

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
