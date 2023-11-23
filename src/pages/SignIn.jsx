import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { loginUser, resetClientPassword } from '../service/firebase/useFirebaseClients';
import './Sign.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Usuário já está logado, redireciona para /user
                navigate('/client');
            }
        });

        return () => unsubscribe(); // Limpeza do listener ao desmontar o componente
    }, [auth, navigate]);

    const handleSignIn = (e) => {
        e.preventDefault();
        loginUser(email, password, (error) => {
            if (error) {
                setFeedbackMessage('Erro ao entrar: ' + error.message);
                setIsError(true);
            } else {
                // Redireciona para /user após login bem-sucedido
                navigate('/client');
            }
        });
    };

    const handleResetPassword = () => {
        const userEmail = prompt("Por favor, insira seu e-mail para redefinir a senha:");
        if (userEmail) {
            resetClientPassword(userEmail)
                .then(() => setFeedbackMessage("E-mail de redefinição de senha enviado. Verifique sua caixa de entrada."))
                .catch(error => {
                    setFeedbackMessage(`Erro ao enviar e-mail de redefinição: ${error.message}`);
                    setIsError(true);
                });
        }
    };
    

    return (
        <div className='form-container'>
            <h1>Bem-vinde de volta!</h1>
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
            {feedbackMessage && <p className={isError ? 'error-message' : 'success-message'}>{feedbackMessage}</p>}
            <p className="reset-password-link" onClick={handleResetPassword}>Esqueci minha senha</p>
            <p className="sign-up-link"><Link to="/signup">Não possuo cadastro</Link></p>
        </div>
    );
};

export default SignIn;
