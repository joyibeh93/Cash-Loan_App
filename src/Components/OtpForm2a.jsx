// import React from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { nanoid } from 'nanoid';
// import '../Styles/OtpForm.css';
// import Buttons from './Buttons';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const OtpForm = () => {
//   const navigate = useNavigate();
//   const validationSchema = yup.object().shape({
//     otp: yup
//       .array()
//       .of(yup.string())
//       .test({
//         name: 'validate-otp',
//         message: 'input the 4-digit PIN',
//         test: (value) => {
//           return value.join('').trim() !== '';
//         },
//       }),
//     .test({
//       name: 'match-pin',
//       message: 'Incorrect PIN',
//       test: (value) => {
//         const enteredOtp = value.join('');
//         const correctPin = '1234'; // Replace with the correct PIN value
//         return enteredOtp === correctPin;
//       },
//     });
//   });

//   const formik = useFormik({
//     initialValues: {
//       otp: ['', '', '', ''],
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       const enteredOtp = values.otp.join('');
//       console.log(enteredOtp);

//       try {
//         const response = await axios.patch(
//           'https://cash2go-backendd.onrender.com/api/v1/user/verify-otp',
//           {
//             otp: enteredOtp,
//           }
//         );

//         // Assuming the API returns a success status code (e.g., 200)
//         if (response.status === 400) {
//           // OTP is correct, navigate to the desired page
//           navigate('/signupstep3');
//         } else {
//           // OTP is incorrect, handle error or show a message
//           console.log('Incorrect OTP');
//         }
//       } catch (error) {
//         // Handle error from the API
//         console.error(error);
//       }
//     },
//   });

//   const handleOtpChange = (index, value) => {
//     const otp = [...formik.values.otp];
//     otp[index] = value;
//     formik.setFieldValue('otp', otp);
//   };

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div className="OtpForm">
//         <div className="otpInput">
//           {Array.from({ length: 4 }).map((_, index) => (
//             <input
//               key={nanoid()}
//               type="number"
//               name={`otp[${index}]`}
//               value={formik.values.otp[index]}
//               onChange={(e) => handleOtpChange(index, e.target.value)}
//               onBlur={formik.handleBlur}
//               className={formik.errors.otp && formik.touched.otp ? 'error' : ''}
//             />
//           ))}
//         </div>
//         {formik.errors.otp && (
//           <div className="error-message">{formik.errors.otp}</div>
//         )}
//       </div>
//       <h1>Enter OTP</h1>
//       <p>Enter the 4 digit sent to your mail</p>
//       <p>
//         Click{' '}
//         <span>
//           <a href="/">HERE</a>
//         </span>{' '}
//         to resend
//       </p>
//       <div className="btn otp">
//         <Buttons button="Submit" />
//       </div>
//       <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
//     </form>
//   );
// };

// export default OtpForm;
