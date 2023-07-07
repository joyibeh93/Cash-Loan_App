import React from 'react';

const CheckBox = ({ inProgress, completed }) => {
  return (
    <div className="input-checkbox">
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox"></label>
    </div>
  );
};

export default CheckBox;
