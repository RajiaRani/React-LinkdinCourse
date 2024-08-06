import axios from "axios";
import { useState } from "react";
import "../style/comment-form.css";

const AddCommentForm = ({articleName, onArticleUpdated}) => {
    const [ name, setName] = useState(" ");
    const [commentText, setCommentText] = useState(" ");
    
    const addComment = async() => {
        const response = await axios.post(`/api/articles/${articleName}/comments`,{
            postedBy:name,
            text:commentText,
        });
     const updatedArticle = response.data;
     onArticleUpdated(updatedArticle);
     setName(" ");
     setCommentText(" ");
    };

    return(
        <div className="add-comment-form">
            <hr/>
            <h3>Add Comment</h3>
            <label htmlFor="name" className="label">Name:</label>
            <input type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"/>
            <br/>
            <label htmlFor="commentText" className="label">Comment:</label>
                <textarea rows="4" cols="50"
                id="commentText"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="input"/>
            
            <br/>
            <button onClick={addComment}>Add</button>
        </div>
    )
};
export default AddCommentForm;