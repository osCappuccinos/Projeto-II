import "./shippingInfo.css"

function ShippingInfo(props) {
    return (
        <div className="info-block">
            <p>Calcular frete e prazo</p>
            <div className="shipping">
                <input placeholder="Digite seu CEP" type="text" />
                <button className="btn3">Confirmar</button>
                <p>Não sei meu CEP</p>
            </div>
        </div>
    );
}

export default ShippingInfo;