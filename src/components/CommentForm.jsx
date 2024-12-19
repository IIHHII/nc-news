import React, { useState } from "react";
import "../styles/CommentForm.css";
import { postComment } from "../api";

const CommentForm = ({ article_id, onCommentAdded }) => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!author || !body) {
      setError("Both fields are required.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    postComment(article_id, { author, body })
      .then((newComment) => {
        onCommentAdded(newComment);
        setAuthor("");
        setBody("");
        setIsSubmitting(false);
      })
      .catch(() => {
        setError("Failed to post comment. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h2>Add a Comment</h2>
      {error && <p className="error-message">{error}</p>}
      <label htmlFor="author">Your Name:</label>
      <input
        id="author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        disabled={isSubmitting}
      />
      <label htmlFor="body">Your Comment:</label>
      <textarea
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        disabled={isSubmitting}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Comment"}
      </button>
    </form>
  );
};

export default CommentForm;
