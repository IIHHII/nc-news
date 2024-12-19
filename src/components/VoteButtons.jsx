import React, { useState } from "react";
import "../styles/VoteButtons.css";

const VoteButtons = ({ article_id, initialVotes, updateVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [isVoting, setIsVoting] = useState(false);
  const [error, setError] = useState(null);

  const handleVote = (voteChange) => {
    setIsVoting(true);
    setVotes((prevVotes) => prevVotes + voteChange);

    updateVotes(article_id, voteChange)
      .then(() => setIsVoting(false))
      .catch(() => {
        setIsVoting(false);
        setVotes((prevVotes) => prevVotes - voteChange);
        setError("Failed to update vote. Please try again.");
      });
  };

  return (
    <div className="vote-buttons">
      {error && <p className="vote-error">{error}</p>}
      
      <button
        onClick={() => handleVote(1)}
        disabled={isVoting}
        className="vote-button"
      >
        ▲ 
      </button>
      <button
        onClick={() => handleVote(-1)}
        disabled={isVoting}
        className="vote-button"
      >
        ▼
      </button>
      <p className="vote-count">{votes}</p>
    </div>
  );
};

export default VoteButtons;
