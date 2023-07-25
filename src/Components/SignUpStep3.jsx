// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate, Link } from 'react-router-dom';
// import Buttons from './Buttons';
// import '../Styles/OtpForm.css';
// import '../Styles/Signupstep3.css';
// import eyeIcon from '../assets/eye icon.svg';

// const SignIn = () => {
//   const validationSchema = Yup.object({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string()
//       .required('Password is required')
//       .min(8, 'Password must be at least 8 characters long'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Please re-enter your password'),
//   });

//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const response = await fetch('https://cash2go-backendd.onrender.com/api/v1/user', {
//         method: ' POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: values.username,
//           password: values.password,
//         }),
//       });

//       if (response.ok) {
//         console.log('Data posted successfully!');
//         navigate('/signupstep4');
//       } else {
//         console.log('Error while posting data.');
//       }
//     } catch (error) {
//       console.log('Error:', error);
//     }

//     setSubmitting(false);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <div className="form-container">
//       <Formik
//         initialValues={{ username: '', password: '', confirmPassword: '' }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form className="form" style={{ paddingTop: '190px' }}>
//           <label htmlFor="username" className="label">
//             Username
//           </label>
//           <Field
//             className="input"
//             type="text"
//             id="username"
//             name="username"
//             placeholder="myworkemail@work.com"
//           />
//           <ErrorMessage
//             name="username"
//             component="div"
//             className="error-message"
//           />

//           <label className="label" htmlFor="password">
//             Password
//           </label>

//           <Field
//             className="input"
//             type={showPassword ? 'text' : 'password'}
//             id="password"
//             maxLength={8}
//             name="password"
//             placeholder="********"
//           />
//           <img
//             src={eyeIcon}
//             className="eye"
//             alt="eye-icon"
//             onClick={togglePasswordVisibility}
//           />

//           <ErrorMessage
//             name="password"
//             component="div"
//             className="error-message"
//           />

//           <label htmlFor="confirmpassword" className="label">
//             Re-enter Password
//           </label>

//           <Field
//             className="input password-input"
//             type={showPassword ? 'text' : 'password'}
//             id="confirmPassword"
//             maxLength={8}
//             name="confirmPassword"
//             placeholder="********"
//           />
//           <img
//             src={eyeIcon}
//             className="eye2"
//             alt="eye-icon"
//             onClick={togglePasswordVisibility}
//           />

//           <ErrorMessage
//             name="confirmPassword"
//             component="div"
//             className="error-message"
//           />

//           <div className="button">
//             {/* <Buttons button="Sign Up" /> */}
//             <Link to="/signupstep4" className="button">
//               <Buttons button="Sign Up" />
//             </Link>
//           </div>
//           <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default SignIn;







// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import Buttons from './Buttons';
// import '../Styles/OtpForm.css';
// import '../Styles/Signupstep3.css';
// import eyeIcon from '../assets/eye icon.svg';

// const SignIn = () => {
//   const validationSchema = Yup.object({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string()
//       .required('Password is required')
//       .min(8, 'Password must be at least 8 characters long'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Please re-enter your password'),
//   });

//   const navigate = useNavigate(); // Initialized the useNavigate hook
//   const [showPassword, setShowPassword] = useState(false); // Added state for password visibility

//   const handleSubmit = (values, { setSubmitting }) => {
//     console.log(values);
//     setSubmitting(false);

//     navigate('/signupstep4'); // Navigate to the next page
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <div className="form-container">
//       <Formik
//         initialValues={{ username: '', password: '', confirmPassword: '' }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form className="form" style={{paddingTop:"190px"}}>
//           <label htmlFor="username" className="label">
//             Username
//           </label>
//           <Field
//             className="input"
//             type="text"
//             id="username"
//             name="username"
//             placeholder="myworkemail@work.com"
//           />
//           <ErrorMessage
//             name="username"
//             component="div"
//             className="error-message"
//           />

//           <label className="label" htmlFor="password">
//             Password
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
//             className="eye"
//             alt="eye-icon"
//             onClick={togglePasswordVisibility} // Added onClick event handler
//           />

//           <ErrorMessage
//             name="password"
//             component="div"
//             className="error-message"
//           />

//           <label htmlFor="confirmpassword" className="label">
//             Re-enter Password
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
//             className="eye2"
//             alt="eye-icon"
//             onClick={togglePasswordVisibility} // Added onClick event handler
//           />

//           <ErrorMessage
//             name="confirmPassword"
//             component="div"
//             className="error-message"
//           />

//           <div className="button">
//             <Buttons button="Sign up" />
//           </div>
//           <p className="terms">Term of use &nbsp; &nbsp; Privacy policy</p>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default SignIn;


// import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../Styles/OtpForm.css';
// import '../Styles/Signupstep3.css';
// import eyeIcon from '../assets/eye icon.svg';

// const SignIn = () => {
//   const validationSchema = Yup.object({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string()
//       .required('Password is required')
//       .min(8, 'Password must be at least 8 characters long'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Please re-enter your password'),
//   });

//   const navigate = useNavigate();
//   const location = useLocation();

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [status, setStatus] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const email = searchParams.get('email');
//     setEmail(email);
//   }, [location.search]);

//   const handleSubmit = async (values, { setSubmitting }) => {
//     setSubmitting(true);

//     const firstName = values.firstname;
//     const lastName = values.lastname;
//     const password = values.password;
//     const confirmPassword = values.confirmPassword;

//     try {
//       const response = await axios.patch(
//         `https://cash2go-backendd.onrender.com/api/v1/user/signup?email=${email}`,
//         {
//           firstName: firstName,
//           lastName: lastName,
//           password: password,
//           confirmPassword: confirmPassword,
//         }
//       );
//       console.log(response.data);
//       const isAuthenticated = response.data;
//       if (isAuthenticated) {
//         navigate(`/dashboard?email=${encodeURIComponent(email)}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       if (error.response) {
//         setStatus(error.response.data.message);
//         setTimeout(() => {
//           setStatus("");
//         }, 5000);
//       }
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
//   };

//   return (
//     <div className="Signup3-container">
//       <Formik
//         initialValues={{ firstname: '', lastname: '', password: '', confirmPassword: '' }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form className="form-signup1">
//           <label htmlFor="firstname" className="label-signup3" style={{ color: '#747a74' }}>
//             First Name
//           </label>
//           <Field
//             className="input-signup1"
//             type="text"
//             id="firstname"
//             name="firstname"
//             placeholder="Enter your first name"
//           />
//           <ErrorMessage
//             name="firstname"
//             component="div"
//             className="error-message"
//           />

//           <label htmlFor="lastname" className="label-signup3" style={{ color: '#747a74' }}>
//             Last Name
//           </label>
//           <Field
//             className="input-signup1"
//             type="text"
//             id="lastname"
//             name="lastname"
//             placeholder="Enter your last name"
//           />
//           <ErrorMessage
//             name="lastname"
//             component="div"
//             className="error-message"
//           />

//           <label className="label-signup3" style={{ color: '#747a74' }} htmlFor="password">
//             Password
//           </label>
//           <Field
//             className="input-signup1"
//             type={showPassword ? 'text' : 'password'}
//             id="password"
//             maxLength={8}
//             name="password"
//             placeholder="********"
//           />
//           <img
//             src={eyeIcon}
//             className="eye"
//             alt="eye-icon"
//             onClick={togglePasswordVisibility}
//           />
//           <ErrorMessage
//             name="password"
//             component="div"
//             className="error-message"
//           />

//           <label htmlFor="confirmPassword" className="label-signup3" style={{ color: '#747a74' }}>
//             Re-enter Password
//           </label>
//           <Field
//             className="input-signup1"
//             type={showConfirmPassword ? 'text' : 'password'}
//             id="confirmPassword"
//             maxLength={8}
//             name="confirmPassword"
//             placeholder="********"
//           />
//           <img
//             src={eyeIcon}
//             className="eye2"
//             alt="eye-icon"
//             onClick={toggleConfirmPasswordVisibility}
//           />
//           <ErrorMessage
//             name="confirmPassword"
//             component="div"
//             className="error-message"
//           />

//           <div style={{ color: 'red' }}>{status}</div>
//           <button className='button-signup1' type='submit'> SignIn <span className="arrow-right">&rarr;</span></button>
//           <p className="terms-signin">Term of use &nbsp; &nbsp; Privacy policy</p>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default SignIn;


import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/OtpForm.css';
import '../Styles/Signupstep3.css';
import eyeIcon from '../assets/eye icon.svg';
import RightArrow from '../assets/Right-arrow.svg';

const SignIn = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please re-enter your password'),
  });

  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    setEmail(email)
  }, [location.search]);

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);

    const firstName = values.firstName;
    const lastName = values.lastName;
    const password = values.password;
    const confirmPassword = values.confirmPassword;
    
    try {
      const response = await axios.patch(
        `https://cash2go-backendd.onrender.com/api/v1/user/signup?email=${email}`,
          {
          firstName: firstName,
          lastName: lastName,
          password: password,
          confirmPassword: confirmPassword,
        }
      );
      console.log(response.data);
      const isAuthenticated = response.data;
      if (isAuthenticated) {
        // Store the email in session storage
        //sessionStorage.setItem('email', values.email);
        navigate('/dashboard',{state:{firstName, lastName}});
        //navigate(`/dashboard?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setStatus(error.response.data.message);
        setTimeout(() => {
          setStatus("");
        }, 5000);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  return (
    <div className="Signup3-container">
      <Formik
        initialValues={{ firstName: '', lastName: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form-signup1">
          <label htmlFor="firstName" className="label-signup3" style={{ color: '#747a74' }}>
            First Name
          </label>
          <Field
            className="input-signup1"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="error-message"
          />

          <label htmlFor="lastName" className="label-signup3" style={{ color: '#747a74' }}>
            Last Name
          </label>
          <Field
            className="input-signup1"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="error-message"
          />

          <label className="label-signup3" style={{ color: '#747a74' }} htmlFor="password">
            Password
          </label>
          <Field
            className="input-signup1"
            type={showPassword ? 'text' : 'password'}
            id="password"
            maxLength={8}
            name="password"
            placeholder="********"
          />
          <img
            src={eyeIcon}
            className="eye"
            alt="eye-icon"
            onClick={togglePasswordVisibility}
          />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />

          <label htmlFor="confirmPassword" className="label-signup3" style={{ color: '#747a74' }}>
            Re-enter Password
          </label>
          <Field
            className="input-signup1"
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            maxLength={8}
            name="confirmPassword"
            placeholder="********"
          />
          <img
            src={eyeIcon}
            className="eye2"
            alt="eye-icon"
            onClick={toggleConfirmPasswordVisibility}
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error-message"
          />

          <div style={{ color: 'red' }}>{status}</div>
          <div className='b-signup3'>
          <button className='' type='submit'> Sign In <span><img src={RightArrow} alt="right-arrow" /></span></button>
          </div>
          <p className="terms-signin">Term of use &nbsp; &nbsp; Privacy policy</p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
