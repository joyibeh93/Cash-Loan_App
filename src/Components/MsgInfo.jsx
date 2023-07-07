import React from 'react';
import Drive from '../assets/Drive.svg';
import Download from '../assets/Download.svg';
import { Link } from 'react-router-dom';
import '../Styles/Predictioninfo.css';

const MsgInfo = () => {
    return (
      <>
        <div className="top-header">
          <div className="name">
            <h1>Muktar Bello</h1>
            <span>ID 20239076</span>
          </div>
          <div className="icon">
            <img src={Drive} alt="file-drive-icon" />
            <img src={Download} alt="Download-icon" />
          </div>
        </div>
        <div className="top-nav">
          <ul className="nav-item">
            <li>
              <Link to="/predictioninfo"> Prediction Info </Link>
            </li>
            <li>
              <Link to="/contactinfo">Contact Info</Link>
          </li>
           <li>
            <Link to="/msginfo">message</Link>    
            </li> 
          </ul>
        </div>
        <div className="info-table">
          <table>
            <thead>
              <tr>
                <th>Info</th>
                <th>Value</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Loan Request Amount</td>
                <td>70,000.00</td>
                <td>100,000</td>
              </tr>
              <tr>
                <td>Credit Score</td>
                <td>720</td>
                <td>Excellent</td>
              </tr>
              <tr>
                <td>Credit Utilization</td>
                <td>18%</td>
                <td>Good</td>
              </tr>
              <tr>
                <td>Annual Income</td>
                <td>1,200,000.00</td>
                <td>Good</td>
              </tr>
              <tr>
                <td>Loan Duration</td>
                <td>6 months</td>
                <td>Short term</td>
              </tr>
              <tr>
                <td>Previous Loan Performance</td>
                <td>5/5</td>
                <td>Excellent</td>
              </tr>
  
              <tr>
                <td>Last Loan Application</td>
                <td>June, 2018</td>
                <td>Good</td>
              </tr>
              <tr>
              <td>Guarantor Credit Score</td>
                <td>09023999999</td>
                <td>09023999999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  export default MsgInfo;