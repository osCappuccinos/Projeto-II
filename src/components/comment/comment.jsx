import { Rating } from "@mui/material";

import "./comment.css"

function Comment({ review }) {
    return (
        <div className="commentCard">
            <div className="commentTop">
                <img src={"https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg"} alt="" />
                <h3>{review.clientId}</h3>
                <Rating className="ratings" name="read-only" value={review.rating} readOnly precision={0.5}/>             
            </div>
            <div className="commentBottom">
                <p>{review.comment}</p>
            </div>
        </div>
    );
}

export default Comment;