import "./cardProduct.css"

function CardProduct(props) {
    const uri = '/produtos/'+props.title
    return (
        <div className="card">
            <img src={props.image}/>
            <h2>{props.title}</h2>
            <p>R${props.price}</p>
            <button><a href={uri}>Comprar</a></button>
        </div>
    );
}

export default CardProduct;