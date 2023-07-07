import React from "react";
import approvedTransparent from "../assets/approved-transparent.svg";
import pendingTransparent from "../assets/pending-transparent.svg";
import approvedBlack from '../assets/approvedblack.svg';
import pendingBlack from '../assets/pendingblack.svg';
import rejectedBlack from '../assets/rejectedblack.svg';
import "../Styles/UserInfo.css";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate()
  const Contact = () =>{
    navigate('/ContactInfo')
  }
  const Review = () =>{
    navigate('/Review')
  }
  return (
    <div className="info-content">
      <div className="notification">
        <div>
          <h2>Ogbeni Mallam</h2>
          <p>Loan History and Performance</p>
        </div>
        <div className="side-btn">
            <button className="Info" onClick={Contact}>Info</button>
            <button className="Review" onClick={Review}>Review</button>
        </div>
      </div>
      <div className="user-status">
        <div>
          <p>Loan Status</p>
          <p className="details">
            <strong>N35,000.00</strong>
          </p>
          <p className="loan-stats">
            Short Term Loan
            <button className="approved">
              {" "}
              <img src={approvedTransparent} alt="approved-icon" /> Approved
            </button>
          </p>
          <img className="appr-black" src={approvedBlack} alt="" />
        </div>
        {/* credit utilization details */}
        <div>
          <p>Credit Utilization</p>
          <p className="details">
            <strong>18%</strong>
          </p>
          <p className="loan-stats">
            30
            <button className="pending">
              {" "}
              <img src={pendingTransparent} alt="approved-icon" /> Pending
            </button>
          </p>
          <img className="pend-black" src={pendingBlack} alt="" />
        </div>
        {/* outstanding debt details */}
        <div>
          <p>Outstanding Debt</p>
          <p className="details">
            <strong>N0.00</strong>
          </p>
          <p className="loan-stats">
            20% Previous Debt
            <button className="excellent">
              {" "}
              <img src={approvedTransparent} alt="approved-icon" /> Excellent
            </button>
          </p>
          <img className="rej-black" src={rejectedBlack} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
