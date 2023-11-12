import "./Checkout2.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeliveryInfoCheckout from "../../components/deliveryInfoCheckout/deliveryInfoCheckout";
import ProductPriceCheckout from '../../components/productPriceCheckout/productPriceCheckout';

const Checkout2 = (props) => {

    return (
        <div className="container-checkout2">
            <h2>Minha sacola</h2>
            <div className="checkout-container">
                <DeliveryInfoCheckout/>
                <ProductPriceCheckout 
                        className="total-details"
                        price="80.75"
                        installments="5"
                    />
            </div>
        </div>
    );
}

export default Checkout2;