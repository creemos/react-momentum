import React from "react";

export const Player = () => {
  return (
    <div className="player">
      <div className="player-controls">
        <button className="play-prev player-icon"></button>
        <button className="play player-icon"></button>
        <button className="play-next player-icon"></button>
      </div>
      <ul className="play-list"></ul>
    </div>
  );
};
