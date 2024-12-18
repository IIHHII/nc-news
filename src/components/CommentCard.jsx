import React from "react";
import "../styles/CommentCard.css";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p className="comment-author">
        <strong>{comment.author}</strong> says:
      </p>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-votes">Votes: {comment.votes}</p>
    </div>
  );
};

export default CommentCard;
