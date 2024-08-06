import ArticlesList from "../Components/ArticlesList";
import articles from "../article-content";
import '../App.css';

const ArticlesListPage = () => {
    return (
        <div className="App">
        <h1>Articles</h1>
        <ArticlesList articles={articles}/>
        </div>
    )
}
export default ArticlesListPage;