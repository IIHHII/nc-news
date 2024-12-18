import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ArticleView.css";

const ArticleView = () => {
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { article_id } = useParams();

  useEffect(() => {
    axios
      .get(`https://burhan-s-project.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading article...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="article-view">
      <h1 className="article-title">{article.title}</h1>
      <img
        src={article.article_img_url}
        alt={article.title}
        className="article-image"
      />
      <p className="article-meta">
        <span>By: {article.author}</span> | <span>Topic: {article.topic}</span>
      </p>
      <div className="article-body">
        <p>{article.body}</p>
      </div>
      <p className="article-votes">Votes: {article.votes}</p>
    </div>
  );
};

export default ArticleView;
