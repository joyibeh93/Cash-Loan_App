//Signup component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import eyeIcon from '../assets/eye icon.svg';
import RightArrow from '../assets/Right-arrow.svg';
import OtpForm from './OtpForm';
import '../Styles/Signup1.css';


const Signup = () => {
 
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [signupMessage, setSignUpMessage] = useState('');

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    companyID: Yup.string().required('Company ID is required'),
  });
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    
    setSubmitting(true);
    const email = values.email;
    const companyID = values.companyID;

    try {
      const response = await fetch('https://cash2go-backendd.onrender.com/api/v1/user/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          companyID: companyID,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const isAuthenticated = data;
        console.log(isAuthenticated);

        if (isAuthenticated) {
        
          setShowOtpForm(true);
          //navigate('/signupstep2')
        navigate(`/signupstep2?email=${encodeURIComponent(email)}`);


        }
      } else {
        setSignUpMessage(data.message || 'An error occurred during sign up.');
        setTimeout(() => {
          setSignUpMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setSignUpMessage('An error occurred during the request.');
      setTimeout(() => {
        setSignUpMessage('');
      }, 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container-signup1" style={{ paddingTop: '170px' }}>
      <div style={{ textAlign: 'center', color: 'red' }}>
        {signupMessage && <p className="login-message">{signupMessage}</p>}
      </div>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ email: '', companyID: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form-signup1">
          <label htmlFor="email" className="label-signup1" style={{ paddingTop: '35px' }}>
            Email
          </label>
          <Field
            className="input-signup1"
            type="email"
            id="email"
            name="email"
            placeholder="myworkemail@work.com"
  
          />
          <ErrorMessage name="email" component="div" className="error-message" />

          <label htmlFor="companyID" className="label-signup1">
            Company ID
          </label>
          <Field
            className="input-signup1"
            type="text"
            required
            maxLength={6}
            id="companyID"
            name="companyID"
            placeholder="******"
          />
          <img src={eyeIcon} className="eye1-signup1" alt="eye-icon" />
          <ErrorMessage name="companyID" component="div" className="error-message" />



          <button className='b-signup1' type='submit'>Next <span><img src={RightArrow} alt="right-arrow" /></span></button>


          <p className="terms-signup1">Term of use &nbsp; &nbsp; Privacy policy</p>
        </Form>
        {/* ${encodeURIComponent(email)} */}
      </Formik>
      {showOtpForm && < OtpForm />} 
      
    </div>
  );
};

export default Signup;


// import React, { useState } from 'react';
// import { useNavigate, useLocation} from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import eyeIcon from '../assets/eye icon.svg';
// //import OtpForm from './OtpForm';
// import '../Styles/Signup1.css';

// const Signup = () => {
//   //const [showOtpForm, setShowOtpForm] = useState(false);
//   const [signupMessage, setSignUpMessage] = useState('');

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email address').required('Email is required'),
//     companyID: Yup.string().required('Company ID is required'),
//   });

//   const location =useLocation()
//   const navigate=useNavigate()

//     // Extract the email from the state if available
//     const { email } = location.state || {};

//   const handleSubmit = async (values, { setSubmitting }) => {
//     setSubmitting(true);
//    // const email = values.email;
//     const companyID = values.companyID;

//     try {
//       const response = await fetch('https://cash2go-backendd.onrender.com/api/v1/user/send-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: email,
//           companyID: companyID,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         const isAuthenticated = data;
//         console.log(isAuthenticated);

//         if (isAuthenticated) {
//           //setShowOtpForm(true);
//           navigate('/signupstep2', { state: { email } });
//         }
//       } else {
//         setSignUpMessage(data.message || 'An error occurred during sign up.');
//         setTimeout(() => {
//           setSignUpMessage('');
//         }, 5000);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setSignUpMessage('An error occurred during the request.');
//       setTimeout(() => {
//         setSignUpMessage('');
//       }, 5000);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="form-container-signup1" style={{ paddingTop: '170px' }}>
//       <div style={{ textAlign: 'center', color: 'red' }}>
//         {signupMessage && <p className="login-message">{signupMessage}</p>}
//       </div>
//       <h2>Sign Up</h2>
//       <Formik
//         initialValues={{ email: '', companyID: '' }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ values }) => {
//           //const { email } = values;
//           return (
//             <Form className="form-signup1">
//               <label htmlFor="email" className="label-signup1" style={{ paddingTop: '35px' }}>
//                 Email
//               </label>
//               <Field
//                 className="input-signup1"
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="myworkemail@work.com"
//               />
//               <ErrorMessage name="email" component="div" className="error-message" />

//               <label htmlFor="companyID" className="label-signup1">
//                 Company ID
//               </label>
//               <Field
//                 className="input-signup1"
//                 type="text"
//                 required
//                 maxLength={6}
//                 id="companyID"
//                 name="companyID"
//                 placeholder="******"
//               />
//               <img src={eyeIcon} className="eye1-signup1" alt="eye-icon" />
//               <ErrorMessage name="companyID" component="div" className="error-message" />

//               <button className="b-signup1" type="submit">
//                 Next <span className="arrow-right">&rarr;</span>
//               </button>

//               <p className="terms-signup1">Term of use &nbsp; &nbsp; Privacy policy</p>
//               {/* {showOtpForm && <OtpForm email={email} />} */}
//             </Form>
//           );
//         }}
//       </Formik>
//     </div>
//   );
// };

// export default Signup;
