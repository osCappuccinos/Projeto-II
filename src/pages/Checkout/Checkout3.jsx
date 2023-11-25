import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import "./Checkout3.css"
import { Link } from 'react-router-dom';

function Checkout3() {
    const [pixCode, setPixCode] = useState('');

    useEffect(() => {
        setPixCode(generateMockPixCode());
    }, []);

    function generateMockPixCode() {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';
        let length = 32;

        for (let i = 0; i < length; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return code;
    }

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(pixCode).then(() => {
            alert('Código PIX copiado!');
        }).catch(err => {
            console.error('Erro ao copiar o código: ', err);
        });
    };

    return (
        <div>
            <div className="container-checkout3">
                <h2>Minha sacola</h2>
                <div className="checkout3-container">
                    <Typography variant='h5' className="h5">Quase lá! Pedido aguardando pagamento</Typography>
                    <Typography variant='subtitle1' className="subtitle1">Para ser confirmada a entrega é necessário haver o pagamento até 02/12/2023</Typography>
                    <Typography variant='h6' className="h6">Metódo de pagamento: Pix</Typography>
                    <div className="pix-copyandpaste">
                    <img src="https://cdn-icons-png.flaticon.com/512/241/241528.png"></img>
                    <input type="text" readOnly="true" value={pixCode} />
                    <button onClick={copyCodeToClipboard}>Copiar código</button>
                </div>
                    <Typography variant="body1" className="body1">Copie o código acima <br/> Acesse o app do seu banco ou internet banking de preferência <br/> Escolha pagar com o Pix, cole o código e finalize o pagamento <br/> Seu pagamento será aprovado em alguns segundos</Typography>
                    <button><Link to="/Client">Ir para Meus Pedidos</Link></button>
                </div>
            </div>
        </div>
    );
    
}

export default Checkout3;