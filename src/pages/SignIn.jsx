import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { loginUser } from '../service/firebase/useFirebaseClients';
import './Sign.css'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [isError, setIsError] = useState(false); // Estado para identificar se a mensagem é de erro

    const handleSignIn = (e) => {
        e.preventDefault();
        loginUser(email, password, (error) => {
            if (error) {
                setFeedbackMessage('Erro ao entrar: ' + error.message); // Define a mensagem de erro
                setIsError(true); // Indica que é uma mensagem de erro
            } else {
                setFeedbackMessage('Login realizado com sucesso!');
                setIsError(false); // Indica que não é uma mensagem de erro
            }
        });
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSignIn}>
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
                <button type="submit">Entrar</button>
                </form>
                {feedbackMessage && <p>{feedbackMessage}</p>} 
            <p>
                <Link to="/signup">Não possuo cadastro</Link>
            </p>
        </div>
    );
};

export default SignIn;
