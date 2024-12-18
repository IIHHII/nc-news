import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchAllArticles } from "../api";
import "../styles/ArticleList.css";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllArticles()
      .then((articles) => setArticles(articles))
      .catch(() => setError("Failed to load articles."));
  }, []);

  return (
    <section className="article-list">
      {error ? (
        <p>{error}</p>
      ) : articles.length > 0 ? (
        articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))
      ) : (
        <p>Loading articles...</p>
      )}
    </section>
  );
};

export default ArticleList;
