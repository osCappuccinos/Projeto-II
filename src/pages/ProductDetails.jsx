import React, { useEffect, useState } from 'react';
import Ratings from "../components/ratings/ratings";
import { useParams } from 'react-router-dom';

import Comment from "../components/comment/comment"
import ProductPrice from "../components/productPrice/productPrice";
import ShippingInfo from "../components/shippingInfo/shippingInfo";
import contentfulController from '../service/contentful/contentfulController';
import { FETCH_STATUS } from '../service/fetchStatus';
import { readProduct } from "../service/firebase/firebaseController";
import { ImagesGallery } from '../components/imageGallery/imagesGallery';
import { H2 } from '../components/title/titles'
import ColorSelector from '../components/selectors/colorSelector';
import SizeSelector from '../components/selectors/sizeSelector';

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { getProductContent } = contentfulController();

  const [content, setContent] = useState([]);
  const [product, setProduct] = useState([]);
  const [status, SetStatus] = useState(FETCH_STATUS.IDLE);
  const [error, setError] = useState(null);

  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchData = async () => {
    try {
      SetStatus(FETCH_STATUS.LOADING);

      const contentResponse = await getProductContent(id);
      const productResponse = await readProduct(id);

      if (contentResponse[0].id === productResponse.id) {
        setContent(contentResponse[0]);
        setProduct(productResponse);
        SetStatus(FETCH_STATUS.SUCCESS);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message)
      SetStatus(FETCH_STATUS.ERROR);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  }

  const handleColorSelected = (event) => {
    setColor(event.target.value);
  }

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };


  if (status === FETCH_STATUS.LOADING) {
    return <div></div>
  } else if (status === FETCH_STATUS.ERROR) {
    return <span>{error}</span>
  } else if (status === FETCH_STATUS.SUCCESS) {
    return (
      <div className="product-details-container">

        <div className="product-info">
          <ImagesGallery images={content.images} handleThumbnailClick={handleThumbnailClick} selectedImage={selectedImage} />
          <div className="textual-info">
            <div className="info-block">
              <H2 text={content.name}></H2>
              <p>Vendido por {content.store}</p>
              <p>{product.ratingCount} avaliações</p>
            </div>
            <ProductPrice
              price={content.price}
              installments="5"
            />
            <div className="info-block">
              <ColorSelector options={content.color} selectedOption={color} handleOptionSelected={handleColorSelected} />
              <SizeSelector options={content.sizes} selectedOption={size} handleOptionSelected={handleChangeSize} />
            </div>
            <button className="addCart">Adicionar à sacola</button>
            <ShippingInfo />
          </div>
        </div>

        <div className="ratings-comments">
          <div className="ratingsDiv">
            <Ratings
              ratingCount={product.ratingCount}
              averageRating={product.averageRating}
              ratings={product.ratings}
            />
          </div>
          <div className="commentsDiv">
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
}

export default ProductDetails;