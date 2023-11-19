import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import useFirebaseOrders from '../service/firebase/useFirebaseOrders';
import "./User.css"
const User = () => {
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const { readAllOrders } = useFirebaseOrders();
    const auth = getAuth();

    useEffect(() => {
        const fetchOrders = async () => {
            if (user) { // Verifica se o usuário está definido
                const allOrders = await readAllOrders();
                if (allOrders) {
                    const userOrders = Object.values(allOrders).filter(order => order.clientId === user.uid);
                    setOrders(userOrders);
                }
            }
        };

        fetchOrders(); // Chama a função fetchOrders
    }, [user]); // Adiciona user como dependência do useEffect

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
            if (loggedInUser) {
                setUser(loggedInUser);
            } else {
                navigate('/signin');
            }
        });

        return () => unsubscribe(); // Desinscreve o listener quando o componente é desmontado
    }, [auth, navigate]);

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/signin');
        }).catch((error) => {
            console.error('Erro ao fazer logout: ', error);
        });
    };

    if (!user) {
        return <div className="user-container">Carregando...</div>;
    }

    return (
        <div className="user-container">
            <h1>Bem-vindo, {user.email}!</h1>
            <div>
                <h2>Histórico de Compras</h2>
                {orders.length > 0 ? (
                     <ul className="user-orders">
                        {orders.map((order, index) => (
                            <li key={index}>Pedido ID: {order.id}, Produtos: {order.products.join(', ')}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Você ainda não tem pedidos.</p>
                )}
            </div>
            <button onClick={handleLogout} className="logout-button">Sair</button> {/* Botão de logout */}
        </div>
    );
};

export default User;
