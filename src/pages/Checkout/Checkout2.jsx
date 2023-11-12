import "./Checkout2.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeliveryInfoCheckout from "../../components/deliveryInfoCheckout/deliveryInfoCheckout";

const Checkout2 = (props) => {

    return (
        <div className="container">
            <h2>Minha sacola</h2>
            <div className="checkout-container">
                <DeliveryInfoCheckout/>
            </div>
        </div>
    );
}

export default Checkout2;