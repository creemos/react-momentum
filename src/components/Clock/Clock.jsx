import React, { useState } from "react";
import "./Clock.css"

export const Clock = () => {
const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString())

setInterval(() => {
  setCurrentTime(new Date().toLocaleTimeString('en-US', {hour12: false}))
  setCurrentDate(new Date().toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric'}))
}, 1000)


  return (
    <>
      <time className="time">{currentTime}</time>
      <div className="date">{currentDate}</div>
    </>
  );
};
