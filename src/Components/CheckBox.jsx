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
// import React from 'react';

// const CheckBox = ({ inProgress }) => {
//   return (
//     <div className="check-box">
//       {inProgress ? (
//         <div className="step-mark">&#10003;</div> // Display a checkmark if inProgress is true
//       ) : (
//         <div className="step-number">1</div> // Display the step number if inProgress is false
//       )}
//     </div>
//   );
// };

// export default CheckBox;

