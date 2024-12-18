import React, { useEffect, useState } from "react";
import { fetchArticleComments } from "../api";
import CommentCard from "./CommentCard";
import "../styles/CommentList.css";

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticleComments(article_id)
      .then((data) => {
        setComments(data || []);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load comments.");
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading comments...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="comments-section">
      <h2>Comments</h2>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </section>
  );
};

export default CommentList;
