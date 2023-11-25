import React, { useState, useEffect } from 'react';
import "./shippingInfo.css";
import { Link } from "react-router-dom";

function ShippingInfo(props) {
    const [cep, setCep] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (cep.length === 8) {
            setMessage('R. Inês Brasil, 298 - Mata Galinha, Fortaleza - CE');
        } else {
            setMessage('');
        }
    }, [cep]);

    return (
        <div className="info-block">
            <p>Calcular frete e prazo</p>
            <div className="shipping">
                <input 
                    placeholder="Digite seu CEP" 
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                />
                <div className='cep-message'>
                {message && <p className="cep-message">{message}</p>}
                <div>
                <p>Não sei meu CEP</p>
                </div>
                <Link to="/checkout">
                    <button>Confirmar</button>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default ShippingInfo;
