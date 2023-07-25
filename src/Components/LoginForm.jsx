// import React, { useState } from 'react';
// import Buttons from './Buttons';
// import eyeIcon from '../assets/eye icon.svg';
// // import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import '../Styles/Login.css';
// import { Formik} from 'formik';


// // Creating schema
// const schema = Yup.object().shape({
//   email: Yup.string()
//     .required('Email is required')
//     .email('Invalid email format'),
//   password: Yup.string()
//     .required('Password is required ')
//     .min(8, 'Password must be at least 8 characters long'),
// });


// export const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false); // Added state for password visibility
//   const navigate = useNavigate(); // Initialized the useNavigate hook


//   const handleSubmit = (values, { setSubmitting }) => {
//     console.log(values);
//     setSubmitting(false);

//     navigate('/dashboard'); // Navigate to the next page
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <div className="login-container">
//       {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
//       <Formik
//         validationSchema={schema}
//         initialValues={{ email: '', password: '' }}
//         onSubmit={handleSubmit}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//         }) => (
//           <div>
//             {/* Passing handleSubmit parameter tohtml form onSubmit property */}
//             <form noValidate onSubmit={handleSubmit} className="form-login">
//               <span className="loginheader">Login</span>
//               {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
//               <label htmlFor="email">Email </label>
//               <input
//                 type="email"
//                 name="email"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.email}
//                 placeholder="myworkemail@work.com"
//                 //   className="form-control inp_text"
//                 id="email"
//                 className="login-input"
//               />
//               {/* If validation is not passed show errors */}
//               <p className="error-message">
//                 {errors.email && touched.email && errors.email}
//               </p>
//               {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
//               <label htmlFor="password">Password</label>
//               <input
//                 type={showPassword ? 'text' : 'password'} // Updated the type attribute
//                 name="password"
//                 maxLength={8}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.password}
//                 className="login-input"
//               //   placeholder="Enter password"
//               //   className="form-control"
//               />
//               <img
//                 src={eyeIcon}
//                 className="login-eye"
//                 alt="eye-icon"
//                 onClick={togglePasswordVisibility}
//               />
//               {/* If validation is not passed show errors */}
//               <p className="error-message">
//                 {errors.password && touched.password && errors.password}
//               </p>
//               {/* Click on submit button to submit the form */}
//               <div className="login-btn">
//                 <Buttons button="Login" />
//               </div>
//             </form>
//           </div>
//         )}
//       </Formik>
//       <div className="footnote">
//         <p>
//           <Link to="/resetpassword"> Forgot Password? </Link> &nbsp; &nbsp;
//           &nbsp; &nbsp; <Link to="/signupstep1"> Sign Up </Link>
//         </p>
//         <div className="footnote2">
//           <p>Term of use &nbsp; &nbsp; &nbsp; &nbsp; Privacy policy</p>
//         </div>
//       </div>
//     </div>
//   );
// };


// Second code
import React, { useState } from 'react';
import Buttons from './Buttons';
import eyeIcon from '../assets/eye icon.svg';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import { Formik, Form, Field} from 'formik';
import axios from 'axios'
//import { Colors } from 'chart.js';

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  //const [loginMessage, setLoginMessage] = useState('');
  const [status,setStatus]=useState("")
  const navigate = useNavigate();

// Handles form submission
const handleSubmit =  async (values, { setSubmitting }) =>{
  setSubmitting(true); // Set form submission state to true

  const email = values.email; // Get password value from form
  const password = values.password; // Get password value from form

  try {
    // Send request to server to authenticate the user email and password
    const response = await axios.post(
      "https://cash2go-backendd.onrender.com/api/v1/user/login",
      {
        email: email,
        password: password,
      }
    );
    const isAuthenticated = response.data; // Get authentication status from response

    console.log(isAuthenticated);
    
    if (isAuthenticated) {
      
      const firstName= response.data.firstName;
      const lastName= response.lastName;
      console.log(firstName,lastName)
      
      // If user is authenticated, pass the loginToApp function as a prop to the parent component
      navigate('/dashboard',{state:{firstName, lastName}}); // Navigate to the next page
      
    }
  } catch (error) {
    console.error("Error:", error);
    if (error.response) {
      setStatus(error.response.data.message); // Set error message from response
      setTimeout(() => {
        setStatus("");
      }, "5000"); // Clear status message after 5 seconds
    }
  } finally {
    setSubmitting(false); // Set form submission state to false
  }
};


  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="login-container">
      <Formik
        validationSchema={schema}
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({
          // values,
          errors,
          touched,
          handleChange,
          handleBlur,
          // handleSubmit,
        }) => (
          <div>
            
            
            <Form className="form-login">
              <span className="loginheader">Login</span>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.email}
                placeholder="myworkemail@work.com"
                id="email"
                className="login-input"
              />
              <p className="error-message">
                {errors.email && touched.email && errors.email}
              </p>

              <label htmlFor="password">Password</label>
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                maxLength={8}
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.password}
                className="login-input"
              />
              <img
                src={eyeIcon}
                className="login-eye"
                alt="eye-icon"
                onClick={togglePasswordVisibility}
              />
              <p className="error-message">
                {errors.password && touched.password && errors.password}
              </p>

              <div className="login-btn">
                <Buttons button="Login" />
              </div>
            </Form>
            <div style={{ color: 'red' }}>{status}</div>
            
          </div>
        )}
      </Formik>
      <div className="footnote">
        <p>
          <Link to="/resetpassword">Forgot Password?</Link>&nbsp; &nbsp;
          &nbsp; &nbsp; <Link to="/signupstep1">Sign Up</Link>
        </p>
        <div className="footnote2">
          <p>Term of use &nbsp; &nbsp; &nbsp; &nbsp; Privacy policy</p>
        </div>
      </div>
    </div>
  );
};
