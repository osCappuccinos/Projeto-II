import "./comment.css"
import { Rating } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function Comment(props) {
    return (
        <div className="commentCard">
            <div className="commentTop">
                <img src={props.userPhoto} alt="" />
                <h3>{props.userName}</h3>
                <Rating justifyContent="left" className="ratings" name="read-only" value={props.rating} readOnly precision={0.5}/>             
            </div>
            <div className="commentBottom">
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Comment;