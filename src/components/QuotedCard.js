import React from "react";

function QuotedCard({ someQuote }) {
  return (
    <div>
      <div>Hey there, here is a quote of {someQuote.character}</div>
      <div>{someQuote.quote}</div>
      <img src={someQuote.image} />
    </div>
  );
}

export default QuotedCard;
