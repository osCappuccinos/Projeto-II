import Card from "../components/cardProduct/cardProduct";
import CardProductDetails from "../components/cardProductDetails/cardProductDetails";
import "./ProductDetails.css";

const ProductDetails = (props) => {
    return (
        <div className="info-container">
            <CardProductDetails/>
        </div>
    );
}

export default ProductDetails;