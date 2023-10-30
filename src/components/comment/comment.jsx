import "./comment.css"
import { Rating } from "@mui/material";

function Comment(props) {
    return (
        <div className="commentCard">
            <div className="commentTop">
                <img src={props.userPhoto} alt="" />
                <h3>{props.userName}</h3>
                <Rating className="ratings" name="read-only" value={props.rating} defaultValue={2.5} readOnly/>
            </div>
            <div className="commentBottom">
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Comment;