import "./shoppingBagProductDetails.css"
import React, { useEffect, useState } from 'react';

function ShoppingBagProductDetails(props) {

    let [count, setCount] = useState(1);

    function incrementCount() {
        count = count + 1;
        setCount(count);
    }

    function decrementCount() {
        if(count > 1){
            count = count - 1;
            setCount(count);
        }
    }

    const handleChange = (event) => {
        setCount(event.target.value);
    }

    return (
        <div className="detailsContainer">
            <img src={props.image} alt="" />
            <div className="productInfo">
                <h4>{props.name}</h4>
                <p>Quantidade: {count}</p>
            </div>
            <h4>R${parseFloat(props.price)*parseFloat(count)}</h4>
            {/* botão - e + da quantidade */}
            <div className="plusMinusContainer">
                <button onClick={decrementCount}>-</button>
                <input type="text" defaultValue={count} value={count} onChange={handleChange}/>
                <button onClick={incrementCount}>+</button>
            </div>
        </div>
    );
}

export default ShoppingBagProductDetails;