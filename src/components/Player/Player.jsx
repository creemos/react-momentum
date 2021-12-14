import React from "react";

export const Player = () => {
  return (
    <div class="player">
      <div class="player-controls">
        <button class="play-prev player-icon"></button>
        <button class="play player-icon"></button>
        <button class="play-next player-icon"></button>
      </div>
      <ul class="play-list"></ul>
    </div>
  );
};
