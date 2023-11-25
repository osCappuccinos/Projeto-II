import React, { useState, useEffect } from 'react';
import "./shippingInfoCheckout.css";

function ShippingInfoCheckout(props) {
    const [cep, setCep] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (cep.length === 8) {
            setMessage('R. Inês Brasil, 298 - Mata Galinha, Fortaleza - CE');
        } else if (cep.length > 0 && cep.length < 8) {
            setMessage('CEP incompleto. Por favor, insira 8 dígitos.');
        } else {
            setMessage('');
        }
    }, [cep]);

    return (
        <div className="info-block-checkout">
            <p>Calcular frete e prazo</p>
            <div className="shipping-checkout">
                <input 
                    placeholder="Digite seu CEP" 
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                />
                {message && <p className="cep-message">{message}</p>}
                <button>Confirmar</button>
                
                <p>Não sei meu CEP</p>
            </div>
        </div>
    );
}

export default ShippingInfoCheckout;
