import "./cardProductDetails.css"
import React, { useEffect, useState } from 'react';
import Comment from "../../comment/comment"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Ratings from "../../ratings/ratings";
import ShippingInfo from "../../shippingInfo/shippingInfo";
import ProductPrice from "../../productPrice/productPrice";

function CardProductDetails(props) {

    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);

    const handleChangeSize = (event) => {
      setSize(event.target.value);
    }

    const handleChangeColor = (event) => {
        setColor(event.target.value);
    }

    const name = props.content.length > 0 ? props.content[0].name : [];
    const price = props.content.length > 0 ? props.content[0].price : [];
    const images = props.content.length > 0 ? props.content[0].images : [];
    const colors = props.content.length > 0 ? props.content[0].color : [];
    const sizes = props.content.length > 0 ? props.content[0].Sizes : [];
    const firstProductImages = props.content.length > 0 ? props.content[0].images[0].file.url : '';

    //console.log(props.content)


    return (
        <div className="product-details-container">
            <div className="product-info">
                <div className="photos">
                    <div className="small-photos">
                        {
                            images.slice(1).map((image, index) => (
                                <img key={index} src={image.file.url} alt={`Product Image ${index}`} />
                            ))
                        }
                    </div>
                    <div className="big-photo">
                        <img src={firstProductImages}/>
                    </div>
                </div>
                <div className="textual-info">
                    <div className="info-block">
                        <h2>{name}</h2>
                        <p>Vendido por {props.content.store}</p>
                        <p>8 avaliações</p>
                    </div>
                    <ProductPrice
                        price={price}
                        installments="5"
                    />
                    <div className="info-block">
                        <p>Escolha a cor:</p>
                        <div className="cor">
                            <FormControl size="small" autoWidth={true}>
                                <Select
                                    id="simple-select"
                                    value={color}
                                    onChange={handleChangeColor}>
                                    {
                                        colors.map((color, index) => (
                                            <MenuItem value={index}>{color}</MenuItem>
                                        ))
                                    }                                    
                                </Select>
                            </FormControl>
                        </div>
                        <p>Escolha o tamanho:</p>
                        <div className="tamanho">
                            <FormControl size="small" autoWidth={true}>
                                    <Select
                                        id="simple-select"
                                        value={size}
                                        onChange={handleChangeSize}>
                                        {
                                            sizes.map((size, index) => (
                                                <MenuItem value={index}>{size}</MenuItem>
                                            ))
                                        }
                                    </Select>
                            </FormControl>
                        </div>
                    </div>
                    <button className="addCart">Adicionar à sacola</button>
                    <ShippingInfo></ShippingInfo>
                    {/* <div className="info-block">
                        <p>Calcular frete e prazo</p>
                        <div className="shipping">
                            <input placeholder="Digite seu CEP" type="text" />
                            <button>Confirmar</button>
                            <p>Não sei meu CEP</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="ratings-comments">
                {/* <div className="ratingsDiv"></div> */}
                <div className="ratingsDiv">
                    <Ratings
                        ratingsCount="8"
                        averageRating="4.5"
                        fiveStarCount="7"
                        fourStarCount="1"
                        threeStarCount="0"
                        twoStarCount="0"
                        oneStarCount="0"
                    />
                </div>
                <div className="commentsDiv">
                    <Comment
                        userPhoto="https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg"
                        userName="Jadson"
                        message="Amei demais, coube super bem e a cor é linda!"
                        rating="4"
                    />
                    <Comment
                        userPhoto="https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg"
                        userName="Jadson"
                        message="Amei demais, coube super bem e a cor é linda!"
                        rating="4"
                    />
                    <Comment
                        userPhoto="https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg"
                        userName="Jadson"
                        message="Amei demais, coube super bem e a cor é linda!"
                        rating="4"
                    />
                    <Comment
                        userPhoto="https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg"
                        userName="Jadson"
                        message="Amei demais, coube super bem e a cor é linda!"
                        rating="4"
                    />
                    
                    
                </div>
                
            </div>
        </div>
    );
}

export default CardProductDetails;