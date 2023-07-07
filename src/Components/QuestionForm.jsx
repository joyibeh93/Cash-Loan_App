import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Styles/QuestionForm.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Buttons from './Buttons';
import RightArrow from '../assets/Right-arrow.svg';
import axios from 'axios';
import '../Styles/OtpForm.css';
import Congrats from '../assets/congratulations.svg';

const validationSchema = Yup.object().shape({
  Question: Yup.string().required('Please select a security question'),
  Answer: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Only text is allowed')
    .required('Please provide an answer'),
});

const Modal = ({ handleModalClose }) => {
  return (
    <div>
      <div className="question-modal">
        <button className="close-modal" onClick={handleModalClose}>
          &times;
        </button>
        <img src={Congrats} alt="good-mark" className="good" />
        <h3>Congratulations !!!</h3>
        <p>
          Your Signup for Cash2go app is now complete. Get ready to unlock
          great financial possibilities and achieve your goals
        </p>
        <button className="continue" onClick={handleModalClose}>
          Continue
        </button>
      </div>
      <div className="overlay" onClick={handleModalClose}></div>
    </div>
  );
};

const QuestionForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email,setEmail]=useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    setEmail(email);
  }, [location.search]);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    //navigate('/signupstep3')
    navigate(`/signupstep3?email=${encodeURIComponent(email)}`);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    setSubmitting(true);

    const securityQuestion = values.Question;
    const securityQuestionAnswer = values.Answer;

    try {
      const response = await axios.patch(
        `https://cash2go-backendd.onrender.com/api/v1/user/security-question?email=${email}`,
        {
          securityQuestion: securityQuestion,
          securityQuestionAnswer: securityQuestionAnswer,
        }
      );

      const isAuthenticated = response.data;

      if (isAuthenticated) {
        handleModalOpen();
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        const errorMessage = error.response.data.message;
        setStatus(errorMessage);
        setTimeout(() => {
          setStatus('');
        }, 5000);
      }
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="Question-container">
      <Formik
        initialValues={{ Question: '', Answer: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="Question-form">
            <label className="label" htmlFor="Question">
              Select your security question
            </label>
            <Field
              as="select"
              id="Question"
              name="Question"
              className="Question-input"
            >
              <option value="">Select a question</option>
              <option value="Where did you meet your spouse?">
                Where did you meet your spouse?
              </option>
              <option value="What city did you grow up?">
                What city did you grow up?
              </option>
              <option value="What is the name of your pet?">
                What is the name of your pet?
              </option>
              <option value="Where is your best subject?">
                Where is your best subject?
              </option>
              <option value="What is the name of your school?">
                What is the name of your school?
              </option>
            </Field>
            <ErrorMessage
              name="Question"
              component="div"
              className="error-message"
            />

            <label htmlFor="Answer" className="label">
              Your answer
            </label>
            <Field
              type="text"
              id="Answer"
              name="Answer"
              className="Question-input"
            />
            <ErrorMessage
              name="Answer"
              component="div"
              className="error-message"
            />

            <div className=" Question-button">
              <Buttons button="Next"/><span><img src={RightArrow} alt="right-arrow" /></span>

            </div>
            <div>{isLoading}</div>
            <div style={{ color: 'red' }}>{status}</div>
            <div>{isLoading}</div>
          </Form>
        )}
      </Formik>
      <p className="Question-terms">
        Term of use &nbsp; &nbsp; Privacy policy
      </p>
      {showModal && <Modal handleModalClose={handleModalClose} />}
    </div>
  );
};

export default QuestionForm;
