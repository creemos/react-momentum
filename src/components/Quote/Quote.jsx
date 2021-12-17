import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Quote.css";

export const Quote = () => {
  const [quoteContent, setQuoteContent] = useState("");
  const [author, setAuthor] = useState("");
  const [quoteLoading, setQuoteLoading] = useState(false);
  const showQuote = () => {
    setQuoteLoading(true);
    axios.get("https://favqs.com/api/qotd").then((response) => {
      setTimeout(() => {
        setQuoteContent(response.data.quote.body);
        setAuthor(response.data.quote.author);
        setQuoteLoading(false);
      }, 1000);
    });
  };
  useEffect(() => {
    showQuote();
  }, []);

  return (
    <>
      <button
        className="change-quote"
        onClick={() => showQuote()}
        style={quoteLoading ? { animation: `spin 1s infinite` } : {}}
      ></button>
      <div>
        <div className="quote">{quoteContent}</div>
        <div className="author">{author}</div>
      </div>
    </>
  );
};
