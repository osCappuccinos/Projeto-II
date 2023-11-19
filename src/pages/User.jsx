import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import useFirebaseOrders from '../service/firebase/useFirebaseOrders';

const User = () => {
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const { readAllOrders } = useFirebaseOrders();
    const auth = getAuth();

    useEffect(() => {
        const fetchOrders = async () => {
            const allOrders = await readAllOrders();
            if (allOrders) {
                const userOrders = Object.values(allOrders).filter(order => order.clientId === user.uid);
                setOrders(userOrders);
            }
        };

        const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
            if (loggedInUser) {
                setUser(loggedInUser);
                fetchOrders();
            } else {
                navigate('/signin');
            }
        });

        return () => unsubscribe(); // Desinscreve o listener quando o componente é desmontado
    }, [navigate, readAllOrders, auth]);

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Redireciona para a página de login após o logout
            navigate('/signin');
        }).catch((error) => {
            console.error('Erro ao fazer logout: ', error);
        });
    };

    if (!user) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>Bem-vindo, {user.email}!</h1>
            <div>
                <h2>Histórico de Compras</h2>
                {orders.length > 0 ? (
                    <ul>
                        {orders.map((order, index) => (
                            <li key={index}>Pedido ID: {order.id}, Produtos: {order.products.join(', ')}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Você ainda não tem pedidos.</p>
                )}
            </div>
            <button onClick={handleLogout}>Sair</button> {/* Botão de logout */}
        </div>
    );
};

export default User;
