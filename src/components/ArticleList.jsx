import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import "../styles/ArticleList.css";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://burhan-s-project.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="article-list">
      {articles.length > 0 ? (
        articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
};

export default ArticleList;
