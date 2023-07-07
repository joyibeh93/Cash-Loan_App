import React from 'react';
import Drive from '../assets/Drive.svg';
import Download from '../assets/Download.svg';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <>
      <div className="top-header">
        <div className="name">
          <h1>Mukatar Bello</h1>
          <span>Contact info</span>
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
          <li>Message</li>
        </ul>
      </div>
      <div className="info-table">
        <table>
          <thead>
            <tr>
              <th>Infomation</th>
              <th className="last">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gender</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>D.O.B</td>
              <td>25-Dec-1985</td>
            </tr>
            <tr>
              <td>Contact Information</td>
              <td>No.12 Jason Smart Street, Orile, Lagos</td>
            </tr>
            <tr>
              <td>Address Of Employer</td>
              <td>No.35, Mati Street,Onipanu, Lagos</td>
            </tr>
            <tr>
              <td>State Of Origin</td>
              <td>Kastina State</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>08023999999</td>
            </tr>

            <tr>
              <td>Next Of Kin</td>
              <td>Jane Okoye</td>
            </tr>
            <tr>
              <td>Next Of Kin Phone Number</td>
              <td>08023999999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactInfo;
