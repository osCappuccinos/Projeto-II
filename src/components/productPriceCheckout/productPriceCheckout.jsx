import "./productPriceCheckout.css"

function ProductPriceCheckout(props) {
    return (
        <div className="info-block-checkout">
            <div className="priceContainer-checkout">
                <p>Total:</p>
                <h2>R${props.price}</h2>
                <p>no Pix</p>
            </div>
            <p>Ou {props.installments}x de R${parseFloat(props.price)/parseFloat(props.installments)} sem juros</p>
        </div>
    );
}

export default ProductPriceCheckout;