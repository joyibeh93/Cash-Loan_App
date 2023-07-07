import React from 'react';

const Buttons = ({ button, onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      {button}
    </button>
  );
};

export default Buttons;
