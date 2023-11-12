import "./shippingInfoCheckout.css"

function ShippingInfoCheckout(props) {
    return (
        <div className="info-block-checkout">
            <p>Calcular frete e prazo</p>
            <div className="shipping-checkout">
                <input placeholder="Digite seu CEP" type="text" />
                <button>Confirmar</button>
                <p>Não sei meu CEP</p>
            </div>
        </div>
    );
}

export default ShippingInfoCheckout;