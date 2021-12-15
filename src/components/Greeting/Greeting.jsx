import React, {useEffect, useState} from "react";

export const Greeting = () => {

  let greetingText = ''
  let pathOfDay = new Date().getHours()
  if (pathOfDay < 7) {
    greetingText = 'night'
  } else if (pathOfDay < 13) {
    greetingText = 'morning'
  } else if (pathOfDay < 19) {
    greetingText = 'evening'
  } else {
    greetingText = 'night'
  }

const [username, setUsername] = useState('')

  useEffect(() => {
    if (localStorage.getItem('username')) {
      setUsername(localStorage.getItem('username'))
    }
  }, [])

const usernameChange = (ev) => {
  localStorage.setItem('username', ev.target.value)
  setUsername(ev.target.value)
}

  return (
    <div className="greeting-container">
      <span className="greeting">Good {greetingText}, </span>
      <input type="text" className="name" value={username} onChange={usernameChange} placeholder="[Enter your name]" />
    </div>
  );
};
