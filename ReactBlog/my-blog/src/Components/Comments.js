const Comments = ({ comments }) => {
    return (
        <>
            <h3>Comments :</h3>
            {comments.map((comment) => (
                <div className="comment" key={comment.postedBy + " : " + comment.text}>
                    <h4>postedBy: {comment.postedBy}</h4>
                    <p>message:{comment.text}</p>
                </div>
            ))}
        </>
    )
}
export default Comments;