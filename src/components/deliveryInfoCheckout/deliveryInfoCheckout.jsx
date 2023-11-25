import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

import ShoppingBagProductDetails from '../shoppingBag/shoppingBagProductDetails/shoppingBagProductDetails';

import "./deliveryInfoCheckout.css"

function DeliveryInfoCheckout({ bag, updateTotalPrice }) {
    const [deliveryConfirmationMessage, setDeliveryConfirmationMessage] = useState('');
    const [paymentConfirmationMessage, setPaymentConfirmationMessage] = useState('');

    const handleDeliveryConfirmation = () => {
        setDeliveryConfirmationMessage('Tipo de entrega confirmado. Por favor, prossiga.');
    };

    const handlePaymentConfirmation = () => {
        setPaymentConfirmationMessage('Forma de pagamento confirmada. Por favor, prossiga.');
    };

    return (
        <div className="smaller-container">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6">1º - Selecione um tipo de entrega</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Receber no endereço:</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            className="radiogroup"
                        >
                            <FormControlLabel className="address" value="Lucas de Oliveira" control={<Radio />} label="Maria Silva, R. Inês Brasil, 298 - Mata Galinha, Fortaleza - CE, 60867-54" />
                            <Typography className="addNewAddress" variant="caption">+ Adicionar novo endereço</Typography>
                            <FormLabel id="demo-radio-buttons-group-label">Retirar na loja:</FormLabel>
                            <FormControlLabel className="address" value="Loja1" control={<Radio />} label="Loja Iracema, av. Mister Hull, s/n - Pici - CEP 60455-760 - Fortaleza - CE" />
                        </RadioGroup>
                    </FormControl>
                    <button onClick={handleDeliveryConfirmation}>Confirmar tipo de entrega</button>
                    {deliveryConfirmationMessage && <p className="delivery-confirmation-message">{deliveryConfirmationMessage}</p>}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6">2º - Selecione uma forma de pagamento</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            className="radiogroup"
                        >
                            <FormControlLabel className="address" value="Pix" control={<Radio />} label="Pix" />
                            <FormControlLabel className="address" value="Boleto" control={<Radio />} label="Boleto" />
                            <FormControlLabel className="address" value="Cartao" control={<Radio />} label="Cartão de crédito" />
                        </RadioGroup>
                    </FormControl>
                    <button onClick={handlePaymentConfirmation}>Confirmar forma de pagamento</button>
                    {paymentConfirmationMessage && <p className="payment-confirmation-message">{paymentConfirmationMessage}</p>}
               
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6">3º - Revisar pedido</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        Object.keys(bag).map((proudctKey) => (
                            <ShoppingBagProductDetails key={proudctKey} product={bag[proudctKey]} updateTotalPrice={updateTotalPrice} />
                        ))
                    }
                    <button><a href="/checkout3">Confirmar pedido</a></button>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default DeliveryInfoCheckout;