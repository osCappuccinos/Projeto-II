import Comment from "../components/comment/comment";
import CardProductDetails from "../components/cardProductDetails/cardProductDetails";
import "./ProductDetails.css";

const ProductDetails = (props) => {
    return (
        <div className="info-container">
            <CardProductDetails
                productName="Bolsa Clutch Azul"
                storeName="Loja Iracema"
                price="80,75"
            />
            
        </div>
    );
}

export default ProductDetails;