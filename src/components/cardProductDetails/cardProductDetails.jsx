import "./cardProductDetails.css"
import React, { useEffect, useState } from 'react';
import Comment from "../comment/comment"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function CardProductDetails(props) {

    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);

    const handleChangeSize = (event) => {
      setSize(event.target.value);
    }

    const handleChangeColor = (event) => {
        setColor(event.target.value);
    }

    return (
        <div className="product-details-container">
            <div className="product-info">
                <div className="photos">
                    <div className="small-photos">
                        <img src="https://photos.enjoei.com.br/clutch-michael-kors-couro-92532468/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNTQ5YWY4NWNhN2E0NjhmN2U0OWZlYjExZDAzMTVmZGQuanBn"/>
                        <img src="https://photos.enjoei.com.br/clutch-michael-kors-couro-92532468/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvYWE3Nzk3MzkxMzc5ZGEwMzFhZTM5ZDI5NmNmMTM3ZGQuanBn"/>
                        <img src="https://photos.enjoei.com.br/clutch-michael-kors-couro-92532468/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNzU1OTgyN2JkM2JmZmI0OThmMjIyNGVkOTFiZDhjZTMuanBn"/>
                        <img src="https://photos.enjoei.com.br/clutch-michael-kors-couro-92532468/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvMGQ1MmQxYmI2NWVhNDFiYTk5YjdmNmE1MTgxMjVlYTcuanBn"/>
                    </div>
                    <div className="big-photo">
                        <img src="https://photos.enjoei.com.br/clutch-michael-kors-couro-92532468/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNWViODY4ZGIwYmI0MDE5YmRkZDk2NGEzYzJlYTRkMTcuanBn"/>
                    </div>
                </div>
                <div className="textual-info">
                    <div className="info-block">
                        <h2>{props.productName}</h2>
                        <p>Vendido por {props.storeName}</p>
                        <p>8 avaliações</p>
                    </div>
                    <div className="info-block">
                        <h1>R${props.price}</h1>
                        <p>Ou 5x de 17,00 sem juros</p>
                    </div>
                    <div className="info-block">
                        <p>Escolha a cor:</p>
                        <div className="cor">
                            <FormControl size="small" autoWidth={true}>
                                <Select
                                    id="simple-select"
                                    value={color}
                                    onChange={handleChangeColor}>
                                    <MenuItem value={10}>Azul</MenuItem>
                                    <MenuItem value={20}>Branco</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <p>Escolha o tamanho:</p>
                        <div className="tamanho">
                            <FormControl size="small" autoWidth={true}>
                                    <Select
                                        id="simple-select"
                                        value={size}
                                        onChange={handleChangeSize}
                                    >
                                        <MenuItem value={10}>P</MenuItem>
                                        <MenuItem value={20}>M</MenuItem>
                                        <MenuItem value={30}>G</MenuItem>
                                    </Select>
                            </FormControl>
                        </div>
                    </div>
                    <button className="addCart">Adicionar à sacola</button>
                    <div className="info-block">
                        <p>Calcular frete e prazo</p>
                        <div className="shipping">
                            <input type="text" />
                            <button>Confirmar</button>
                            <p>Não sei meu CEP</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ratings-comments">
                {/* <div className="ratingsDiv"></div> */}
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