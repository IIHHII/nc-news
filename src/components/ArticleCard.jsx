import React from "react";
import "../styles/ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <div className="article-card-header">
        <img
          src={article.article_img_url}
          alt={`${article.title}`}
          className="article-image"
        />
        <h2 className="article-title">{article.title}</h2>
      </div>
      <p className="article-meta">
        <span>By: {article.author}</span> | <span>Topic: {article.topic}</span>
      </p>
      <div className="article-details">
        <p>Votes: {article.votes}</p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

export default ArticleCard;
