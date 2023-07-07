import React from "react";
import '../Styles/chart.css'
import download from '../assets/Download.svg';
import downArrow from '../assets/down-arrow.svg';
import userIcon from '../assets/user-icon.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';

const PreviousApp = () => {
  return (
    <div className ='previousTable'>
       <div className="tablehead">
        <div>
          <h3>Previous Loan Applications</h3>
          <span>Sorted by Date</span>
        </div>
        <img src={download} alt="download-icon" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>
              Ref No. 
            </th>
            <th>
              Status <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Amount <img src={downArrow} alt="" />{' '}
            </th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Short Term</h4>
                <span>Palm pay</span>
              </div>
            </td>
            <td>20237899</td>
            <td>
              <p className="rejected-down">
                <img src={rejectedTransparent} alt="" /> Defaulted
              </p>
            </td>
            <td>$967.00</td>
          </tr>
          </tbody>
        </table>
    </div>
  )
}

export default PreviousApp
