import { useParams } from "react-router-dom";
import articles from "../article-content.js";
import NotFoundPage from "./NotFoundPage.js";
import Comments from "../Components/Comments.js";
import '../App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import AddCommentForm from "../Components/AddCommentForm.js";

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({upvotes:0, comments:[]});
    const {articleId} = useParams() ;

    useEffect(() => {
        const loadArticleInfo = async() => {
            const response =  await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
           setArticleInfo(newArticleInfo);
            // setArticleInfo({upvotes: Math.floor(Math.random()*10 +1), comments:[]});
        }
        loadArticleInfo();
    }, [articleId]);
    

    const article = articles.find(
        (article) => article.name === articleId
    );

    const addUpvote = async() => {
      const response = await axios.put(`/api/articles/${articleId}/upvotes`);
      const updatedArticle = response.data;
      setArticleInfo(updatedArticle);
    };

    if(!article){
        return <NotFoundPage/>
    }

    
   return(
    <>
    <div key={article.id} className="App page-body">
    <h1>Title : {article.title}</h1>
    <div className="upvote-section">
    <button onClick={addUpvote}>Upvotes</button>
    </div>
    <p>{articleInfo.upvotes}</p>
    {article.content.map((content, idx) => (
        <p key={idx}>{content}</p>)
    )}
    
        <Comments comments={articleInfo.comments}/>
        <AddCommentForm  
        articleName={articleId}
        onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}/>

    </div>
    
    </>
   )
}
export default ArticlePage;