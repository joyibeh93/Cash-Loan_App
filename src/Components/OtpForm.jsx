import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Buttons from './Buttons';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const OtpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    setEmail(email);
  }, [location.search]);

  const initialValues = {
    otp: ['', '', '', ''],
  };

  const validationSchema = yup.object().shape({
    otp: yup
      .array()
      .of(yup.string().required('PIN is required'))
      .min(4, 'PIN must be exactly 4 digits')
      .max(4, 'PIN must be exactly 4 digits'),
  });

  const submitForm = async (values, { setSubmitting }) => {
    const enteredOtp = values.otp.join('');

    setSubmitting(true);

    try {
      const response = await axios.patch(`https://cash2go-backendd.onrender.com/api/v1/user/verify-otp?email=${email}`, {
        otp: enteredOtp,
      });

      const isAuthenticated = response.data;
      if (isAuthenticated) {
        //navigate('/signupstep4')
        navigate(`/signupstep4?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        setStatus(error.response.data.message);
        setTimeout(() => {
          setStatus('');
        }, 5000);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await axios.patch(`https://cash2go-backendd.onrender.com/api/v1/user/resend-otp?email=${email}`);

      if (response.data) {
        setStatus('New OTP has been sent. Please check your email.');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        setStatus(error.response.data.message);
        setTimeout(() => {
          setStatus('');
        }, 5000);
      }
    }
  };

  return (
    
    <div className='otpform-container'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
      {({ isSubmitting }) => (
        <Form>
          <div className="OtpForm">
            <div className="otpInput">
              {Array.from({ length: 4 }).map((_, i) => (
                <Field
                  key={i}
                  type="text"
                  name={`otp[${i}]`}
                  autoComplete="off"
                  inputMode="text"
                  maxLength={1}
                  pattern="[0-9]*"
                />
              ))}
            </div>
          </div>
          <h1>Enter OTP</h1>
          <p>Enter the 4-digit OTP sent to your email address</p>
          <p>
            Click{' '}
            <span>
              <button type="button" onClick={handleResendOTP}>
                HERE
              </button>
            </span>{' '}
            to resend
          </p>
          <div style={{ color: 'red' }}>{status}</div>
          <div className="btn otp">
            <Buttons button="Submit" disabled={isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>

    </div>
    
  );
};

export default OtpForm;

