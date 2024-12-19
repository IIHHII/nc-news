import React, { useState } from "react";
import { deleteComment } from "../api";
import "../styles/DeleteCommentButton.css";

const DeleteCommentButton = ({ comment_id, onCommentDeleted }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    if (isDeleting) return;

    setIsDeleting(true);
    setError(null);

    deleteComment(comment_id)
      .then(() => {
        onCommentDeleted(comment_id);
        setIsDeleting(false);
      })
      .catch(() => {
        setError("Failed to delete comment. Please try again.");
        setIsDeleting(false);
      });
  };

  return (
    <div className="delete-comment-button">
      {error && <p className="error-message">{error}</p>}
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="delete-button"
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default DeleteCommentButton;
