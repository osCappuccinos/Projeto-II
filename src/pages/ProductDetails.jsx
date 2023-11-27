import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';

import { CommentGroup } from '../components/comment/commentGroup';
import { ImagesGallery } from '../components/imageGallery/imagesGallery';
import ProductPrice from "../components/productPrice/productPrice";
import Ratings from "../components/ratings/ratings";
import ColorSelector from '../components/selectors/colorSelector';
import SizeSelector from '../components/selectors/sizeSelector';
import ShippingInfo from "../components/shippingInfo/shippingInfo";
import { H2 } from '../components/title/titles'
import contentfulController from '../service/contentful/contentfulController';
import { FETCH_STATUS } from '../service/fetchStatus';
import useFirebaseBags from '../service/firebase/useFirebaseBags';
import useFirebaseProducts from '../service/firebase/useFirebaseProducts';
import useFirebaseReviews from '../service/firebase/useFirebaseReviews';

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { getProductContent } = contentfulController();
  const { readProduct } = useFirebaseProducts();
  const { createProductInBag } = useFirebaseBags();
  const { createProductReview, readAllProductReviews } = useFirebaseReviews();

  const [content, setContent] = useState([]);
  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [status, SetStatus] = useState(FETCH_STATUS.IDLE);
  const [error, setError] = useState(null);
  const [store, setStore] = useState(null);

  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const fetchData = async () => {
    try {
      SetStatus(FETCH_STATUS.LOADING);

      const contentResponse = await getProductContent(id);
      const productResponse = await readProduct(id);

      // Busca e define a loja
      if (productResponse && productResponse.storeSlug) {
        const storeResponse = await getStoreContent(productResponse.storeSlug);
        if (storeResponse && storeResponse.length > 0) {
          setStore(storeResponse[0]);
        }
      }

      const reviewsResponse = await readAllProductReviews(id);
      setReviews(reviewsResponse);

      if (contentResponse[0].id === productResponse.id) {
        setContent(contentResponse[0]);
        setProduct(productResponse);
        SetStatus(FETCH_STATUS.SUCCESS);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      SetStatus(FETCH_STATUS.ERROR);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeSize = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleColorSelected = (selectedColor) => {
    setColor(selectedColor);
  };


  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const addProductToBag = () => {
    const response = createProductInBag(0, product.id, 1);
  }

  const handleReviewButtonClick = () => {
    setShowReviewForm(true);
  };

  const handleRatingChange = (newValue) => {
    setRating(newValue);
  };


  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Handle form submission logic, e.g., send the review to the server
      await createProductReview(id, 2, comment, rating, product.storeId);

      // Update reviews state with the new review
      const updatedReviews = await readAllProductReviews(id);
      setReviews(updatedReviews);

      // Update product state with the new ratings
      const updatedProduct = await readProduct(id);
      setProduct(updatedProduct);

      // Reset form state
      setShowReviewForm(false);
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Error submitting review:', error);
      // Handle error, e.g., show an error message to the user
    }
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
              {/*      <p>Vendido por {store ? store.name : 'Carregando...'}</p> */}
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
            <button className="addCart" onClick={addProductToBag}>Adicionar à sacola</button>
            <ShippingInfo />
          </div>
        </div>

        <div className="ratings-comments">
          <div className="ratingsDiv">
            {
              product.ratings ? <Ratings
                ratingCount={product.ratingCount}
                averageRating={product.averageRating}
                ratings={product.ratings}
              /> : ""
            }
          </div>
          <div className="commentsDiv">
            {
              reviews ? <CommentGroup reviews={reviews} /> : ""
            }
            <button className="ratingsButton" onClick={handleReviewButtonClick}>
              Escreva uma avaliação
            </button>

            {showReviewForm && (
              <form className="review-form">
                <div className='rating-stars'>
                Avaliação:
                <Rating
                  name="rating"
                  value={rating}
                  onChange={(event, newValue) => {
                    handleRatingChange(newValue);
                  }}
                />
                </div>
                <br />
                <label className="comment-label">
                  Comment:
                  <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    className="comment-textarea"
                  />
                </label>
                <br />
                <button type="submit" className="submit-review-button">Enviar avaliação</button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;