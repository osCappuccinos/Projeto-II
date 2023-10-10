import "./card.css"

function Card(props) {
    return (
        <div className="card">
            <img src={props.image}/>
            <h2>{props.title}</h2>
            <p>R${props.price}</p>
            <button>Comprar</button>
        </div>
    );
}

export default Card;