import axios from "axios";
import React, { useState, useEffect } from "react";

export const Quote = () => {
  const [quoteContent, setQuoteContent] = useState("");
  const [author, setAuthor] = useState("");
  const showQuote = () => {
    axios.get("https://favqs.com/api/qotd").then((response) => {
      setQuoteContent(response.data.quote.body);
      setAuthor(response.data.quote.author);
    });
  };
useEffect(() => {
  showQuote()
}, [])

  return (
    <>
      <button className="change-quote" onClick={() => showQuote()}></button>
      <div>
        <div className="quote">{quoteContent}</div>
        <div className="author">{author}</div>
      </div>
    </>
  );
};
