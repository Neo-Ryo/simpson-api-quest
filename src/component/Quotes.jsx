import React from "react";

function DisplayQuote({ simpson }) {
  return (
    <div className="DisplayQuote">
      <img src={simpson.image} alt={simpson.character} />
      <p className="name">{simpson.character}</p>
      <p className="quote">{simpson.quote}</p>
    </div>
  );
}

export default DisplayQuote;
