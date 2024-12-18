import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../api";
import CommentList from "./Commentlist";
import "../styles/SingleArticle.css";

const SingleArticle = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    fetchSingleArticle(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load article.");
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading article...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="single-article">
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

      <CommentList article_id={article_id} />
    </section>
  );
};

export default SingleArticle;
