import React from 'react';
import CheckBoxSteps from './CheckBoxSteps';
import CheckBox from './CheckBox';
import '../index.css'

const StepsContainer = () => {
  return (
    <div className="steps-container">
      <div className="authenticate">
        <CheckBox />
        <div className="num">
          <CheckBoxSteps
            stepsNum="step"
            Num="1"
            stepsDescription="fill your work email and number"
          />
        </div>
      </div>

      <div className="authenticate">
        <CheckBox inProgress={true} />
        <div className="step2 num">
          <CheckBoxSteps
            stepsNum="step"
            Num="2"
            stepsDescription="fill the otp sent to your email"
          />
        </div>
      </div>
      <div className="authenticate">
        <CheckBox />
        <div className="step3 num">
          <CheckBoxSteps
            stepsNum="step"
            Num="3"
            stepsDescription="security questions"
          />
        </div>
      </div>
      <div className="authenticate">
        <CheckBox />
        <div className="step4 num">
          <CheckBoxSteps
            stepsNum="step"
            Num="4"
            stepsDescription="create your password"
          />
        </div>
      </div>
      <div className="authenticate">
        <CheckBox className="five" />
        <div className="step5 num">
          <CheckBoxSteps
            stepsNum="final step"
            stepsDescription="log into cash2go"
          />
        </div>
      </div>
    </div>
  );
};

export default StepsContainer;

// import React from 'react';
// import CheckBoxSteps from './CheckBoxSteps';
// import CheckBox from './CheckBox';
// import '../index.css';

// const StepsContainer = () => {
//   return (
//     <div className="steps-container">
//       <div className="authenticate">
//         <CheckBox />
//         <div className="num">
//           <CheckBoxSteps
//             stepsNum="step"
//             Num="1"
//             stepsDescription="fill your work email and number"
//           />
//         </div>
//       </div>

//       <div className="authenticate">
//         <CheckBox inProgress={true} /> {/* Pass inProgress prop as true for the in-progress step */}
//         <div className="step2 num">
//           <CheckBoxSteps
//             stepsNum="step"
//             Num="2"
//             stepsDescription="fill the otp sent to your email"
//           />
//         </div>
//       </div>
//       <div className="authenticate">
//         <CheckBox />
//         <div className="step3 num">
//           <CheckBoxSteps
//             stepsNum="step"
//             Num="3"
//             stepsDescription="security questions"
//           />
//         </div>
//       </div>
//       <div className="authenticate">
//         <CheckBox />
//         <div className="step4 num">
//           <CheckBoxSteps
//             stepsNum="step"
//             Num="4"
//             stepsDescription="create your password"
//           />
//         </div>
//       </div>
//       <div className="authenticate">
//         <CheckBox className="five" />
//         <div className="step5 num">
//           <CheckBoxSteps
//             stepsNum="final step"
//             stepsDescription="log into cash2go"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepsContainer;
