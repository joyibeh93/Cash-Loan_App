import React from "react";
import { Link } from "react-router-dom";
import approvedTransparent from "../assets/approved-transparent.svg";
import pendingTransparent from "../assets/pending-transparent.svg";
import '../Styles/Review.css';
const Review = () => {
  return (
    <div className="review-container">
      <div className="review-heading">
        <div>
          <h1>Ogbeni Mallam</h1>
          <p>ID 20239076</p>
        </div>
        <div className="review-button">
        <Link to="/Contact">
          <button className="Contact-button">Contact</button>
        </Link>
        <Link to="/Message">
          <button className="Message-button">Message</button>
        </Link>
        </div>
      </div>
      <div className="review-details">
          <p>Cashflow</p>
          <p>Previous Loans</p>
          <p>Income & Expenditure</p>
          <p>Spending Pattern</p>
          <p>Behavioural</p>

        </div>
      <div className="user-status">
        <div>
          <p>Credit-Debit Ratio</p>
          <p className="details">
            <strong>62.5%</strong>
          </p>
          <p className="loan-stats">
            55%
            <button className="approved">
              {" "}
              <img src={approvedTransparent} alt="approved-icon" />Good
            </button>
          </p>
          <img src={""} alt="" />
        </div>
        {/* credit utilization details */}
        <div>
          <p>Total Credit Turnover</p>
          <p className="details">
            <strong>N80,000.00</strong>
          </p>
          <p className="loan-stats">
            TBT
            <button className="approved">
              {" "}
              <img src={approvedTransparent} alt="approved-icon" />Good
            </button>
          </p>
          <img src={""} alt="" />
        </div>
        {/* outstanding debt details */}
        <div>
          <p>Total Debit Turnover</p>
          <p className="details">
            <strong>N30,000.00</strong>
          </p>
          <p className="loan-stats">
            TCT
            <button className="pending">
              {" "}
              <img src={pendingTransparent} alt="approved-icon" /> Fair
            </button>
          </p>
          <img src={""} alt="" />
        </div>       
      </div>
    </div>
  );
};

export default Review;
