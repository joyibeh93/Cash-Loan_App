// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import Buttons from './Buttons';
// import '../Styles/Resetpassword3.css';
// import eyeIcon from '../assets/eye icon.svg';
// import Congrats from '../assets/congratulations.svg';

// const ResetPassword3 = () => {
//   const validationSchema = Yup.object({
//     password: Yup.string()
//       .required('Password is required')
//       .min(8, 'Password must be at least 8 characters long'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Please re-enter your password'),
//   });

//   // Initialized the useNavigate hook
//   const [showPassword, setShowPassword] = useState(false);

//   // const handleSubmit = (values, { setSubmitting }) => {
//   //   console.log(values);
//   //   setSubmitting(false);
//   // };

//   const handleSubmit = async (values, { setSubmitting }) => {
//     setSubmitting(true);
//     const { password } = values;
//     const data = {
//       password: password,
//     };

//     try {
//       const response = await fetch(
//         'https://cash2go-backendd.onrender.com/api/v1/user/resetPassword',
//         {
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//         }
//       );

//       if (response.ok) {
//         setShowModal(true);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setSubmitting(false);
//     }
//   };


//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };
//   // Added state for password visibility
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };
//   const closeModal = () => {
//     setShowModal(false);
//   };
//   const navigate = useNavigate();
//   const goToLogin = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="form-container">
//       <h1>Reset Password</h1>
//       <Formik
//         initialValues={{ password: '', confirmPassword: '' }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           console.log(values);
//           openModal();
//           handleSubmit();
//         }}
//       >
//         <Form className="form">
//           <label className="label" htmlFor="password">
//             New Password
//           </label>

//           <Field
//             className="input"
//             type={showPassword ? 'text' : 'password'} // Updated the type attribute
//             id="password"
//             name="password"
//             placeholder="********"
//           />
//           <img
//             src={eyeIcon}
//             className="eye-1"
//             alt="eye-icon"
//             onClick={togglePasswordVisibility} // Added onClick event handler
//           />

//           <ErrorMessage
//             name="password"
//             component="div"
//             className="error-message"
//           />

//           <label htmlFor="confirmpassword" className="label">
//             Confirm New Password
//           </label>

//           <Field
//             className="input password-input"
//             type={showPassword ? 'text' : 'password'} // Updated the type attribute
//             id="confirmPassword"
//             name="confirmPassword"
//             placeholder="********"
//           />
//           <img
//             src={eyeIcon}
//             className="eye-2"
//             alt="eye-icon"
//             onClick={togglePasswordVisibility} // Added onClick event handler
//           />

//           <ErrorMessage
//             name="confirmPassword"
//             component="div"
//             className="error-message"
//           />

//           <div className="button">
//             <Buttons button="Reset" />
//           </div>
//         </Form>
//       </Formik>
//       {showModal && (
//         <div className="modal">
//           <button class="close-modal" onClick={closeModal}>
//             &times;
//           </button>
//           <img src={Congrats} alt="good-mark" className="good" />
//           <h3>Password Changed</h3>
//           <p>
//             Congratulations your password has been successfully changed.You may
//             now proceed to log in.
//           </p>
//           <button className="continue" onClick={goToLogin}>
//             Continue
//           </button>
//         </div>
//       )}
//       {showModal && <div className="overlay"></div>}

//       <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
//     </div>
//   );
// };

// export default ResetPassword3;


import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Buttons from './Buttons';
import '../Styles/Resetpassword3.css';
import eyeIcon from '../assets/eye icon.svg';
import Congrats from '../assets/congratulations.svg';

const ResetPassword3 = () => {
  const validationSchema = Yup.object({
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please re-enter your password'),
  });

  // Initialized the useNavigate hook
  const [showPassword, setShowPassword] = useState(false);
  const [status,setStatus]=useState("")

  const { email } = useParams();

  // const handleSubmit = (values, { setSubmitting }) => {
  //   console.log(values);
  //   setSubmitting(false);
  // };

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true); // Set form submission state to true
    // toggleModal();

    const password = values.password; // Get password value from form
    const confirmPassword = values.confirmPassword; // Get confirm password value from form

    try {
      // Send request to server to authenticate new password
      const response = await axios.patch(
        `https://cash2go-backendd.onrender.com/api/v1/user/update-password?email=${encodeURIComponent(email)}`,
        {
          password: password,
          confirmPassword: confirmPassword,
        }
      );
      console.log(response.data);
      const isAuthenticated = response.data; // Get authentication status from response
      if (isAuthenticated) {
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setStatus(error.response.data.message); // Set error message from response
        setTimeout(() => {
          setStatus(""); // Clear status message after 5 seconds
        }, "5000");
      }
    } finally {
      setSubmitting(false); // Set form submission state to false
    }
  };



  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  // Added state for password visibility
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div className="form-container">
      <h1>Reset Password</h1>
      <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            openModal();
            handleSubmit(values, { setSubmitting }); // Pass the setSubmitting function
          }}
        >

        <Form className="form">
          <label className="label" htmlFor="password">
            New Password
          </label>

          <Field
            className="input"
            type={showPassword ? 'text' : 'password'} // Updated the type attribute
            id="password"
            name="password"
            placeholder="********"
          />
          <img
            src={eyeIcon}
            className="eye-1"
            alt="eye-icon"
            onClick={togglePasswordVisibility} // Added onClick event handler
          />

          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />

          <label htmlFor="confirmpassword" className="label">
            Confirm New Password
          </label>

          <Field
            className="input password-input"
            type={showPassword ? 'text' : 'password'} // Updated the type attribute
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
          />
          <img
            src={eyeIcon}
            className="eye-2"
            alt="eye-icon"
            onClick={togglePasswordVisibility} // Added onClick event handler
          />

          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error-message"
          />

          <div className="b-signup1" style={{width:"75%"}}>
            <Buttons button="Reset" />
          </div>
        </Form>
      </Formik>
      {showModal && (
        <div className="question-modal">
          <button class="close-modal" onClick={closeModal}>
            &times;
          </button>
          <img src={Congrats} alt="good-mark" className="good" />
          <h3>Password Changed</h3>
          <p>
            Congratulations your password has been successfully changed.You may
            now proceed to log in.
          </p>
          <button className="continue" onClick={goToLogin}>
            Continue
          </button>
          <div className="status-message">{status}</div>
        </div>
      )}
      {showModal && <div className="overlay"></div>}

      <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
    </div>
  );
};

export default ResetPassword3;

// import { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import Buttons from './Buttons';
// import '../Styles/Resetpassword3.css';

// const validationSchema = Yup.object().shape({
//   password: Yup.string()
//     .required('Please enter your new password')
//     .min(8, 'Password must be at least 8 characters long'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Please confirm your new password'),
// });

// const ResetPasswordForm3 = () => {
//   const navigate = useNavigate();
//   const { email } = useParams();
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (values, { setSubmitting }) => {
//     setSubmitting(true);

//     const { password } = values;

//     try {
//       const response = await axios.patch(
//         `https://cash2go-backendd.onrender.com/api/v1/user/reset-password/complete?email=${encodeURIComponent(email)}`,
//         { password }
//       );

//       const { message } = response.data;
//       if (message) {
//         setStatus(response.data.message);
//         setShowModal(true);
//         }

     
      
//     } catch (error) {
//       console.error('Error:', error);
//       if (error.response) {
//         setStatus(error.response.data.message);
//       }
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // setTimeout(() => {
//   //   navigate('/');
//   // }, 3000);
//   return (
//     <div className="reset-password-form-container">
//       <h2>Reset Password</h2>

//       <Formik
//         initialValues={{ password: '', confirmPassword: '' }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ errors, touched }) => (
//           <Form className="reset-password-form">
//             <div className="form-group">
//               <label htmlFor="password">New Password:</label>
//               <Field type="password" id="password" name="password" className="input" />
//               <ErrorMessage name="password" component="div" className="error-message" />
//             </div>

//             <div className="form-group">
//               <label htmlFor="confirmPassword">Confirm Password:</label>
//               <Field type="password" id="confirmPassword" name="confirmPassword" className="input" />
//               <ErrorMessage name="confirmPassword" component="div" className="error-message" />
//             </div>

//             <div className="form-group">
//               <Buttons button="Reset Password" />
//             </div>

//             <div className="status-message">{status}</div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default ResetPasswordForm3;
