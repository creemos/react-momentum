import React, { useState } from "react";

export const Clock = () => {
const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString())

setInterval(() => {
  setCurrentTime(new Date().toLocaleTimeString('ru-RU'))
  setCurrentDate(new Date().toLocaleDateString('ru-RU', {weekday: 'long', month: 'long', day: 'numeric'}))
}, 1000)


  return (
    <>
      <time class="time">{currentTime}</time>
      <date class="date">{currentDate}</date>
    </>
  );
};
