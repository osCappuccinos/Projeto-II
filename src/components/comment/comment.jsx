import "./comment.css"

function Comment(props) {
    return (
        <div className="commentCard">
            <div className="commentTop">
                <img src={props.userPhoto} alt="" />
                <h3>{props.userName}</h3>
            </div>
            <div className="commentBottom">
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Comment;