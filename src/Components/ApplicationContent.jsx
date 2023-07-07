import React from 'react'
import download from '../assets/Download.svg';
import downArrow from '../assets/down-arrow.svg';
import userIcon from '../assets/user-icon.svg';
import approvedTransparent from '../assets/approved-transparent.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
import '../Styles/Dashboard-down.css';
import { Link } from 'react-router-dom';

function ApplicationContent() {
  return (
    <div>
        <div style={{marginBottom:"20px"}}>
            <ul>
                <li>Applications</li>
                <li className='appcnt'> All Applications</li>
            </ul>
        </div>
        <div className="dashBoardTable">
      <div className="tablehead">
        <div>
          <h3>All Applications</h3><br/>
          <span>Sorted by Date</span>
        </div>
        <img src={download} alt="download-icon" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>
              Date <img src={downArrow} alt="down-arrow" />{' '}
            </th>
            <th>
              Status <img src={downArrow}  alt="down-arrow" />{' '}
            </th>
            <th>
              Credit Score <img src={downArrow}  alt="down-arrow" />{' '}
            </th>
            <th>
              Amount <img src={downArrow} alt="down-arrow" />{' '}
            </th>
            <th>Download </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
              <Link to='/applicantinfo'><h4>Ogbeni Malani</h4></Link>
                <span>012889</span>
              </div>
              
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down">
                <img src={approvedTransparent} alt="approved-img" /> Approved
              </p>
            </td>
            <td>810</td>
            <td>N 35,000.00</td>
            <td>
              <img src={download} alt="download-icon" />
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
              <h4>Muktarr Bello</h4>
                <span>014907</span>
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down">
                <img src={approvedTransparent} alt="approved-img" /> Approved
              </p>
            </td>
            <td>205</td>
            <td>N 102,000.00</td>
            <td>
              <img src={download} alt="download-icon" />
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
              <h4>Ogbeni Malani</h4>
                <span>014990</span>
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down rejected-reject">
                <img src={rejectedTransparent} alt="rejected-img" /> Rejected
              </p>
            </td>
            <td>330</td>
            <td>N 40,000.00</td>
            <td>
              <img src={download} alt="" />
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
              <h4>Rukayat stute</h4>
                <span>014990</span>
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down">
                <img src={approvedTransparent} alt="" /> Approved
              </p>
            </td>
            <td>332</td>
            <td>N 50,000.00</td>
            <td>
              <img src={download} alt="" />
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Love Onyekah</h4>
                <span>015678</span>
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down">
                <img src={approvedTransparent} alt="" /> Approved
              </p>
            </td>
            <td>810</td>
            <td>N50,000.00</td>
            <td>
              <img src={download} alt="" />
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
              <h4>Ogbeni Malani</h4>
                <span>015679</span>
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down">
                <img src={approvedTransparent} alt="" /> Approved
              </p>
            </td>
            <td>205</td>
            <td>N 500,000.00</td>
            <td>
              <img src={download} alt="" />
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Janet Oluwole</h4>
                <span>019678</span>
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down rejected-reject">
                <img src={rejectedTransparent} alt="rejected-text" /> Rejected
              </p>
            </td>
            <td>330</td>
            <td>N 30,000.00</td>
            <td>
              <img src={download} alt="" />
            </td>
          </tr>
          <tr>
            <td className="first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
              <h4>Rukayat stute</h4>
                <span>015078</span>
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="approved-down">
                <img src={approvedTransparent} alt="" /> Approved
              </p>
            </td>
            <td>332</td>
            <td>N 50,000.00</td>
            <td>
              <img src={download} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
       
    <div className="goTo">
        <button className="prev">
          <span className="arrow-left">&larr;</span>Prev
        </button>
        <div className="numbers">
          <button>1</button>
          <button>2</button>
          <button>...</button>
          <button>5</button>
          <button>6</button>
        </div>
        <button className="next">
          Next<span className="arrow-right">&rarr;</span>
        </button>
      </div>
    </div>
  )
}

export default ApplicationContent