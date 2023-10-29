import Card from "../components/card/card";
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