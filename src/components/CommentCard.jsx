import React from "react";
import DeleteCommentButton from "./DeleteCommentButton";
import "../styles/CommentCard.css";

const CommentCard = ({ comment, currentUser, onCommentDeleted }) => {
  const isUserComment = comment.author === currentUser;

  return (
    <div className="comment-card">
      <p className="comment-author">
        <strong>{comment.author}</strong> says:
      </p>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-votes">Votes: {comment.votes}</p>
      {isUserComment && (
        <DeleteCommentButton
          comment_id={comment.comment_id}
          onCommentDeleted={onCommentDeleted}
        />
      )}
    </div>
  );
};

export default CommentCard;
