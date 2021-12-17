import React, { useState, useRef, useEffect } from "react";
import data from "./songs.json";
import "./Player.css"

export const Player = () => {
  let [currentTrack, setCurrentTrack] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeValue, setVolumeValue] = useState(`0.5`)
  const srcAudio = data["songs"][`${currentTrack}`]["link"];
  const audioPlayer = useRef();

  const toggleAudio = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
      setIsPlaying(true);
    } else {
      audioPlayer.current.pause();
      setIsPlaying(false);
    }
  };

  const changeSong = async (direction) => {
    setCurrentTrack((currentTrack += direction));
    await audioPlayer.current.pause()
    if (currentTrack > Object.keys(data.songs).length) {
      setCurrentTrack(1);
    } else if (currentTrack < 1) {
      setCurrentTrack(Object.keys(data.songs).length);
    }
    audioPlayer.current.src = data["songs"][`${currentTrack}`]["link"];
    audioPlayer.current.play();
  };

  useEffect(() => {
    audioPlayer.current.volume = volumeValue
    
  }, [volumeValue])

  return (
    <div className="player">
      <audio ref={audioPlayer} src={srcAudio}/>
      <div className="player-controls">
        <button
          className="play-prev player-icon"
          onClick={() => changeSong(-1)}
        ></button>
        {isPlaying ? (
          <button
            className="play player-icon pause"
            onClick={toggleAudio}
          ></button>
        ) : (
          <button className="play player-icon" onClick={toggleAudio}></button>
        )}
        <button
          className="play-next player-icon"
          onClick={() => changeSong(1)}
        ></button>
        <input type="range" className="volume" min="0" max="1" step="0.1" value={volumeValue} onChange={(e) => setVolumeValue(e.target.value)} />
      </div>
      <ul className="play-list">
        {Object.keys(data.songs).map((item) => {
          return (
            <li
              className="play-item"
              key={item}
              onClick={async () => {
                await setCurrentTrack(item)
                setIsPlaying(true)
                audioPlayer.current.play();
              }
            }
              style={
                (item != currentTrack) ? { color: "white" } : { color: "#30d5c8" }
              }
            >
              {data.songs[item].artist}: "{data.songs[item].title}"
            </li>
          );
        })}
      </ul>
    </div>
  );
};
