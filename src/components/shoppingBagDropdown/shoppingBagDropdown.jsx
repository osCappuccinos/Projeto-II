import "./shoppingBagDropdown.css"
import React, { useEffect, useState } from 'react';
import ShoppingBagProductDetails from "../shoppingBagProductDetails/shoppingBagProductDetails";

function ShoppingBagDropdown(props) {

    const [itemsString, setItemsString] = useState([]);

    useEffect(() => {
        if(props.itemsCount > 1){
            setItemsString('items')
        }else{
            setItemsString('item')
        }
        }, [props.itemsCount])

    
    return (
        <div className="dropdownContainer">
            <div className="summary">
                <h3>Resumo</h3>
                <p>{props.itemsCount} {itemsString}</p>
            </div>
            <ShoppingBagProductDetails
                itemsCount = {props.itemsCount}
                price="80,75"
                name="Bolsa Clutch Azul"
                image={'https://photos.enjoei.com.br/clutch-michael-kors-couro-92532468/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNWViODY4ZGIwYmI0MDE5YmRkZDk2NGEzYzJlYTRkMTcuanBn'}
            />
            <ShoppingBagProductDetails
                itemsCount = {props.itemsCount}
                price="80,75"
                name="Bolsa Clutch Azul"
                image={'https://photos.enjoei.com.br/clutch-michael-kors-couro-92532468/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNWViODY4ZGIwYmI0MDE5YmRkZDk2NGEzYzJlYTRkMTcuanBn'}
            />
            <ShoppingBagProductDetails
                itemsCount = {props.itemsCount}
                price="80,75"
                name="Bolsa Clutch Azul"
                image={'https://photos.enjoei.com.br/clutch-michael-kors-couro-92532468/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNWViODY4ZGIwYmI0MDE5YmRkZDk2NGEzYzJlYTRkMTcuanBn'}
            />
            <ShoppingBagProductDetails
                itemsCount = {props.itemsCount}
                price="80,75"
                name="Bolsa Clutch Azul"
                image={'https://photos.enjoei.com.br/clutch-michael-kors-couro-92532468/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNWViODY4ZGIwYmI0MDE5YmRkZDk2NGEzYzJlYTRkMTcuanBn'}
            />
            <div className="total">
                <h4>Total</h4>
                <h4>R${props.cartTotal}</h4>
            </div>
            <button className="goToCart">Ir para minha sacola</button>
        </div>
    );
}

export default ShoppingBagDropdown;