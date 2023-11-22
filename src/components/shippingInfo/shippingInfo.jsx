import "./shippingInfo.css";
import { Link } from "react-router-dom";

function ShippingInfo(props) {
    return (
        <div className="info-block">
            <p>Calcular frete e prazo</p>
            <div className="shipping">
                <input placeholder="Digite seu CEP" type="text" />
                <Link to="/checkout">
                    <button>Confirmar</button>
                </Link>
                <p>Não sei meu CEP</p>
            </div>
        </div>
    );
}

export default ShippingInfo;
