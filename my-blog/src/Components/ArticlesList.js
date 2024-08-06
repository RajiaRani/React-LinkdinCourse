import { Link } from "react-router-dom";
const ArticlesList = ({articles}) => {
    return (
        <div>
            {articles.map(
                (article, idx) =>
                    <Link to={`/articles/${article.name}`} key={idx}>
                        <div className="article">
                            <h3>{article.title}</h3>
                            <p>{article.content[0].substring(0, 120)}...</p>
                            <br />
                        </div>
                    </Link>
            )}
        </div>
    );
};
export default ArticlesList;