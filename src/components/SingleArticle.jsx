import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle, updateArticleVotes } from "../api";
import CommentList from "./Commentlist";
import "../styles/SingleArticle.css";

const SingleArticle = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVoting, setIsVoting] = useState(false);

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

  const handleVote = (voteChange) => {
    if (!article) return;

    setIsVoting(true);
    setArticle((prev) => ({ ...prev, votes: prev.votes + voteChange }));

    updateArticleVotes(article_id, voteChange)
      .then(() => setIsVoting(false))
      .catch(() => {
        setIsVoting(false);
        setArticle((prev) => ({ ...prev, votes: prev.votes - voteChange }));
        setError("Failed to update vote. Please try again.");
      });
  };

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
      <div className="article-votes">
        <p>Votes: {article.votes}</p>
        <button
          onClick={() => handleVote(1)}
          disabled={isVoting}
          className="vote-button"
        >
          Upvote
        </button>
        <button
          onClick={() => handleVote(-1)}
          disabled={isVoting}
          className="vote-button"
        >
          Downvote
        </button>
      </div>
      <CommentList article_id={article_id} />
    </section>
  );
};

export default SingleArticle;
