import "./cardStore.css"

function CardStore(props) {
    const uri = '/produtos/'+props.title
    return (
        <div className="cardStore">
            <div className="imagesGrid">
                <img className='img' src={props.image1}/>
                <img className='img' src={props.image2}/>
                <img className='img' src={props.image3}/>
            </div>
            <h2>{props.storeName}</h2>
            <h3>Moda praia</h3>
        </div>
    );
}

export default CardStore;