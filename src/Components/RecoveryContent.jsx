import React from 'react';
import '../Styles/Dashboard-down.css';
import download from '../assets/Download.svg';
import downArrow from '../assets/down-arrow.svg';
import userIcon from '../assets/user-icon.svg';
import approvedTransparent from '../assets/approved-transparent.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
import Paginatination from './paginatination';
import { Link } from "react-router-dom"


const DashBoard1_Down = () => {
  return (

    <div>
          <div className="dashboard-content">
             <p>Notification</p>
             <div className="notification">
                 <div>
                 <h2>Recovery</h2>
                
                 </div>
                 <div className="exit-new">
                 <button className="exisiting recoverybtn">Settings</button>
                 <button className="new reoveryEdit">Edit</button>
                 </div>
             </div>
         </div>
     
    <div className="dashDown-Table" style={{width:'950px'}}>
      <div className="dashDown-tablehead">
        <div className='dashDown-h3' >
          <h3 >All Applications</h3> <br />
          <span >Sorted by Date</span>
        </div>
        <img src={download} alt="download-icon" />
      </div>
      <table>
        <thead>
          <tr >
            <th  >Applicants</th>
            <th>
              Date Due<img src={downArrow} alt="" />{' '}
            </th>
            <th >
              Progress <img src={downArrow} alt="" />{' '}
            </th>
            <th >
              Credit Score <img src={downArrow} alt="" />{' '}
            </th>
            <th >
              Total Amount <img src={downArrow} alt="" />{' '}
            </th>
            <th >
              Amount Left <img src={downArrow} alt="" />{' '}
            </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td  className="dashDown-first-data">
              <img src={userIcon} alt="user-icon" />
              <div className="data-title"  >
                <h4>Ogbeni Malani</h4>
                <Link to="/applicantinfo" >ID-202390112 </Link>
              </div>
            </td >
            <td >02 / 04 / 23</td>
            <td>
              <p className="dashDown-approved">
                <img src={approvedTransparent} alt="approvedTransparent" /> Approved
              </p>
            </td>
            <td>810</td>
            <td>N 35,000.00</td>
            <td>N 2,000.00</td>
            <td>
             <p className="msg-cnt-dot">...</p>
             </td>
          </tr>
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Muktarr Bello</h4>
                <Link to="/applicantinfo">ID-202390113</Link>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <p className="dashDown-approved">
                <img src={approvedTransparent} alt=""  /> Approved
              </p>
            <td>205</td>
            <td>N 102,000.00</td>
            <td>N 20,000.00</td>
            <td>
             <p className="msg-cnt-dot">...</p>
             </td>
          </tr>
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon"/>{' '}
              <div className="data-title">
                <h4 >Ekere Stutern</h4>
                <Link to="/applicantinfo">ID-202390113</Link>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="dashDown-rejected">
                <img src={rejectedTransparent} alt="" /> Rejected
              </p>
            </td>
            <td>255</td>
            <td>N 72,000.00</td>
            <td>N 70,000.00</td>
            <td>
             <p className="msg-cnt-dot">...</p>
             </td>
          </tr>
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon"  />{' '}
              <div className="dashDown-data-title"  >
                <h4>Rukaya Stutern</h4>
                <Link to="/applicantinfo" >ID-202390114</Link>
              </div>
            </td >
            <td>02 / 04 / 23</td>
            <td>
              <p className="dashDown-approved">
                <img src={approvedTransparent} alt=""  /> Approved
              </p>
            </td>
            <td>330</td>
            <td>N 35,000.00</td>
            <td>N 2,000.00</td>
            <td>
             <p className="msg-cnt-dot">...</p>
             </td>
          </tr>
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon"/>{' '}
              <div className="data-title">
                <h4 >Muktarr Stute</h4>
                <Link to="/applicantinfo">ID-202390115</Link>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="dashDown-approved">
                <img src={approvedTransparent} alt="" /> Approved </p>
            </td>
            <td>550</td>
            <td>N 102,000.00</td>
            <td>N 20,000.00</td>
            <td>
             <p className="msg-cnt-dot">...</p>
             </td>
          </tr>
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Victor Stutern</h4>
                <Link to="/applicantinfo" > ID202390116 </Link>
                              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="dashDown-rejected">
                <img src={rejectedTransparent} alt="" /> Rejected
              </p>
            </td>
            <td>332</td>
            <td>N 72,000.00</td>
            <td>N 70,000.00</td>
            <td>
             <p className="msg-cnt-dot">...</p>
             </td>
          </tr>
          
        </tbody>
      </table>
      <Paginatination/>
    </div>
    </div>
  );
};

export default DashBoard1_Down;

