import React from 'react';
import quote from '../assets/quote.svg';
import '../LoginBg.css';
const Quote = () => {
  return (
    <div>
      <img src={quote} alt="quote-img" />
      <p className="quote-text">
        <em>Money is a terrible master but an excellent servant</em>
      </p>
      <p>P.T.Bamum</p>
    </div>
  );
};

export default Quote;
