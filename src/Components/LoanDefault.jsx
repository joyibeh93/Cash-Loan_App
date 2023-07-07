import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import '../Styles/LoanDefault.css'

const initialValues = {
  bvn: "",
  dependant: "",
  applicants_income: "",
  loan_amount: "",
  self_employed: "",
  co_applicants_income: "",
  married: "",
  credit_history: "",
  education: "",
  property_area: "",
};


const LoanDefault = () => {
const navigate = useNavigate();

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);

    // Navigate to the next page
    navigate('/applicantinfo')
  };

  return (
    <div className="form-containersss">
      <h1 className="predict-h1">Predict Loan Default</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="Loan_form">
          <div className="column">
            <div className="row">
              <h3 className="predict-h3">Bvn</h3>
              <Field
                type="text"
                name="bvn"
                required
                placeholder="23589000453"
                inputMode="numeric"
                pattern="[0-9]*"
                className="loan-default"
              />
            </div>

            <div className="row">
              <h3 className="predict-h3">Dependant</h3>
              <Field
                as="select"
                type="text"
                id="dependant"
                name="dependant"
                className="input"
              >
                <option value="">Select an option</option>
                <option value="option1">0</option>
                <option value="option2">1</option>
                <option value="option3">2</option>
                <option value="option4">3</option>
              </Field>
            </div>

            <div className="row">
              <h3 className="predict-h3">Self-employed</h3>
              <Field
                as="select"
                type="text"
                id="self_employed"
                name="self_employed"
                className="input"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Field>
            </div>

            <div className="row">
              <h3 className="predict-h3">Married</h3>
              <Field
                as="select"
                type="text"
                id="married"
                name="married"
                className="input"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Field>
            </div>

            <div className="row">
              <h3 className="predict-h3">Education</h3>
              <Field
                as="select"
                type="text"
                id="education"
                name="education"
                className="input"
              >
                <option value="">Select an option</option>
                <option value="option1">Undergraduate</option>
                <option value="option2">Graduate</option>
              </Field>
            </div>
          </div>

          <div className="column">
            <div className="row">
              <h3>Loan Amount</h3>
              <Field
                type="text"
                name="loan_amount"
                required
                placeholder="45,000.00"
                inputMode="numeric"
                pattern="[0-9]+(,[0-9]{3})*(\.[0-9]{2})?"
                className="loan-default"
              />
            </div>

            <div className="row">
              <h3 className="predict-h3">Applicants income</h3>
              <Field
                type="text"
                name="applicants_income"
                required
                placeholder=">25,000.00"
                inputMode="numeric"
                pattern="[0-9]+(,[0-9]{3})*(\.[0-9]{2})?"
                className="loan-default"
              />
            </div>

            <div className="row">
              <h3 className="predict-h3">Co-applicants income</h3>
              <Field
                type="text"
                name="co_applicants_income"
                required
                placeholder=">25,000.00"
                inputMode="numeric"
                pattern="[0-9]+(,[0-9]{3})*(\.[0-9]{2})?"
                className="loan-default"
              />
            </div>

            <div className="row">
              <h3 className="predict-h3">Credit history</h3>
              <Field
                as="select"
                type="text"
                id="credit_history"
                name="credit_history"
                className="input"
              >
                <option value="">Select an option</option>
                <option value="option1">0</option>
                <option value="option2">1</option>
                <option value="option3">2</option>
                <option value="option4">3</option>
                <option value="option5">4</option>
                <option value="option6">5</option>
              </Field>
            </div>

            <div className="row">
              <h3 className="predict-h3">Property area</h3>
              <Field
                as="select"
                type="text"
                id="property_area"
                name="property_area"
                className="input"
              >
                <option value="">Select an option</option>
                <option value="option1">Rural</option>
                <option value="option2">Urban</option>
              </Field>
            </div>
          </div>

          <button type="submit" className="default-submit">Make Prediction</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoanDefault;