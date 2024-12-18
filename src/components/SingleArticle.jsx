import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/SingleArticle.css";

const SingleArticle = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { article_id } = useParams(); 
  console.log("Article ID:", article_id);

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
    <div className="single-article">
      {isLoading ? (
        <p>Loading article...</p>
      ) : error ? (
        <p>{error}</p>
      ) : article && article.length > 0 ? (
        <>
          <h1 className="article-title">{article[0].title}</h1>
          <img
            src={article[0].article_img_url}
            alt={article[0].title}
            className="article-image"
          />
          <p className="article-meta">
            <span>By: {article[0].author}</span> | <span>Topic: {article[0].topic}</span>
          </p>
          <div className="article-body">
            <p>{article[0].body}</p>
          </div>
          <p className="article-votes">Votes: {article[0].votes}</p>
        </>
      ) : (
        <p>No article data found.</p>
      )}
    </div>
  );
  
  
};

export default SingleArticle;
