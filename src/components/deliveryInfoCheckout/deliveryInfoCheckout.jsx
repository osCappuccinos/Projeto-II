import "./deliveryInfoCheckout.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function DeliveryInfoCheckout(props) {
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
                            <FormControlLabel className="address" value="Lucas de Oliveira" control={<Radio />} label="Lucas de Oliveira, av. Mister Hull, s/n - Pici - CEP 60455-760 - Fortaleza - CE" />
                            <Typography className="addNewAddress" variant="caption">+ Adicionar novo endereço</Typography>
                            <FormLabel id="demo-radio-buttons-group-label">Retirar na loja:</FormLabel>
                            <FormControlLabel className="address" value="Loja1" control={<Radio />} label="Loja Iracema, av. Mister Hull, s/n - Pici - CEP 60455-760 - Fortaleza - CE" />
                        </RadioGroup>
                    </FormControl>
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
                    <Typography>
                        Receber no endereço
                    </Typography>
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
                    <Typography>
                        Receber no endereço
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default DeliveryInfoCheckout;