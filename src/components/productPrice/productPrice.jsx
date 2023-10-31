import "./productPrice.css"

function ProductPrice(props) {
    return (
        <div className="info-block">
            <div className="priceContainer">
                <h1>R${props.price}</h1>
                <p>no Pix</p>
            </div>
            <p>Ou {props.installments}x de R${parseFloat(props.price)/parseFloat(props.installments)} sem juros</p>
        </div>
    );
}

export default ProductPrice;