import React from 'react';
import '../Styles/Dashboard-down.css';
import download from '../assets/Download.svg';
import downArrow from '../assets/down-arrow.svg';
import userIcon from '../assets/user-icon.svg';
import approvedTransparent from '../assets/approved-transparent.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
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
     
    <div className="dashDown-Table" style={{ marginTop: '50px' }}>
      <div className="dashDown-tablehead">
        <div style={{ paddingBottom: '15px' }} >
          <h3 className='dashDown-h3'>All Applications</h3>
          <span >Sorted by Date</span>
        </div>
        <img src={download} alt="download-icon" style={{ paddingRight: '45px' }} />
      </div>
      <table>
        <thead>
          <tr >
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>Applicants</th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Date Due<img src={downArrow} alt="" />{' '}
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Progress <img src={downArrow} alt="" />{' '}
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Credit Score <img src={downArrow} alt="" />{' '}
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Total Amount <img src={downArrow} alt="" />{' '}
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Amount Left <img src={downArrow} alt="" />{' '}
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon" style={{ paddingLeft: '20px' }} />{' '}
              <div className="dashDown-data-title"  >
                <h4 style={{ paddingRight: '16px' }}>Ogbeni Malani</h4>
                <Link to="/applicantinfo" style={{ color: '#74757a', paddingRight: '25px', paddingLeft:'5px'}}> ID202390112 </Link>
              </div>
            </td >
            <td style={{ borderBottom: '1px solid #b9bdc2' }}>02 / 04 / 23</td>
            <td>
              <p className="dashRev-approved">
                <img src={approvedTransparent} alt="" style={{ marginRight: '5px', padding:'5px' }} /> Approved
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
              <img src={userIcon} alt="user-icon" style={{ paddingLeft: '20px' }}/>{' '}
              <div className="data-title">
                <h4 style={{ paddingRight: '16px' }}>Muktarr Bello</h4>
                <Link to="/applicantinfo" style={{ color: '#74757a', paddingRight: '25px', paddingLeft:'5px'}}> ID202390113 </Link>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <p className="dashRev-approved">
                <img src={approvedTransparent} alt="" style={{ marginRight: '5px', padding:'5px' }} /> Approved
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
              <img src={userIcon} alt="user-icon" style={{ paddingLeft: '20px' }} />{' '}
              <div className="data-title">
                <h4 style={{ paddingRight: '16px' }}>Ekere Stutern</h4>
                <Link to="/applicantinfo" style={{ color: '#74757a', paddingRight: '25px', paddingLeft:'5px'}}> ID202390113 </Link>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="dashRev-rejected">
                <img src={rejectedTransparent} alt="" style={{ marginRight: '5px' }} /> Rejected
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
              <img src={userIcon} alt="user-icon" style={{ paddingLeft: '20px' }} />{' '}
              <div className="dashDown-data-title"  >
                <h4 style={{ paddingRight: '16px' }}>Rukaya Stutern</h4>
                <Link to="/applicantinfo" style={{ color: '#74757a', paddingRight: '25px', paddingLeft:'5px'}}> ID202390114 </Link>
              </div>
            </td >
            <td style={{ borderBottom: '1px solid #b9bdc2' }}>02 / 04 / 23</td>
            <td>
              <p className="dashRev-approved">
                <img src={approvedTransparent} alt="" style={{ marginRight: '5px' }} /> Approved
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
              <img src={userIcon} alt="user-icon" style={{ paddingLeft: '20px' }}/>{' '}
              <div className="data-title">
                <h4 style={{ paddingRight: '16px' }}>Muktarr Stute</h4>
                <Link to="/applicantinfo" style={{ color: '#74757a', paddingRight: '25px', paddingLeft:'5px'}}> ID202390115 </Link>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="dashRev-rejected">
                <img src={approvedTransparent} alt="" style={{ marginRight: '5px' }} /> Approved </p>
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
              <img src={userIcon} alt="user-icon" style={{ paddingLeft: '20px' }}/>{' '}
              <div className="data-title">
                <h4 style={{ paddingRight: '16px' }}>Victor Stutern</h4>
                <Link to="/applicantinfo" style={{ color: '#74757a', paddingRight: '25px', paddingLeft:'5px'}}> ID202390116 </Link>
                              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="dashRev-rejected">
                <img src={rejectedTransparent} alt="" style={{ marginRight: '5px' }} /> Rejected
              </p>
            </td>
            <td>332</td>
            <td>N 72,000.00</td>
            <td>N 70,000.00</td>
            <td>
             <p className="msg-cnt-dot">...</p>
             </td>
          </tr>
          
          <tr >
            <th className="dashDown-footer"  >
            <button className='dashDown-foot1' ><span className="arrow-left">&larr;</span>Prev</button>
              <button className='dashRev-foot2' >1</button>
              <button className='dashDown-foot2'   >2</button>
              <button className='dashDown-foot2'  >_</button>
              <button className='dashDown-foot2'  >5</button>
              <button className='dashDown-foot2'  >6</button>
              <button className='dashRev-foot3'  >Next<span className="arrow-right">&rarr;</span></button>
            </th>
          </tr >
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DashBoard1_Down;

// import React from 'react';
// // import '../Styles/Dashboard-down.css';
// //import download from '../assets/Download.svg';
// import downArrow from '../assets/down-arrow.svg';
// import userIcon from '../assets/user-icon.svg';
// import approvedTransparent from '../assets/approved-transparent.svg';
// import rejectedTransparent from '../assets/rejected-transparent.svg';
// //import { Link } from "react-router-dom"
// import '../Styles/Recovery.css'
// import { Link } from 'react-router-dom';

// const DashBoard1_Down = () => {
//   return (
//     <div>
//          <div className="dashboard-content">
//             <p>Notification</p>
//             <div className="notification">
//                 <div>
//                 <h2>Recovery</h2>
                
//                 </div>
//                 <div className="exit-new">
//                 <button className="exisiting recoverybtn">Settings</button>
//                 <button className="new reoveryEdit">Edit</button>
//                 </div>
//             </div>
//         </div>
//         <div className="tablehead recooveryTablHead2">
//             <div>
//                 <h3 className='recovery-tablhead'>All Applications</h3>
//                 <span>Sorted by Date</span>
//             </div>
//       </div>
//     <div className="dashBoardTable">
     
//       <table>
//         <thead>
//           <tr>
//             <th>Applicants</th>
//             <th>
//               Date Due <img src={downArrow} alt="" />{' '}
//             </th>
//             <th>
//               Progress <img src={downArrow} alt="" />{' '}
//             </th>
//             <th>
//               Credit Score <img src={downArrow} alt="" />{' '}
//             </th>
//             <th>
//               Total Amount <img src={downArrow} alt="" />{' '}
//             </th>
//             <th>Amount Left <img src={downArrow} alt="" />{' '}</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <Link to='/applicantinfo'><h4>Ogbeni Malani</h4></Link>
//                 <p className='recoveryID'> ID202390112 </p>
//                 {/* <span>more info</span> */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//               <p className="approved-down">
//                 <img src={approvedTransparent} alt="" /> Approved
//               </p>
//             </td>
//             <td>810</td>
//             <td>N 35,000.00</td>
//             <td>N 2,000.00</td>
//             <td>
//             <p className="msg-cnt-dot">...</p>
//             </td>
//           </tr>
//           <tr>
//             <td className="first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <h4>Muktarr Bello</h4>
//                 <p className='recoveryID'> ID202390112 </p>
//                 {/* <span>more info</span> */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//               <p className="approved-down">
//                 <img src={approvedTransparent} alt="" /> Approved
//               </p>
//             </td>
//             <td>205</td>
//             <td>N 102,000.00</td>
//             <td>N 20,000.00</td>
//             <td>
//             <p className="msg-cnt-dot">...</p>
//             </td>
//           </tr>
//           <tr>
//             <td className="first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <h4>Rukayat stute</h4>
//                 <p className='recoveryID'> ID202390112 </p>
//                 {/* <span>more info</span> */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//               <p className="approved-down rejected-reject">
//                 <img src={rejectedTransparent} alt="" /> Rejected
//               </p>
//             </td>
//             <td>330</td>
//             <td>N 72,000.00</td>
//             <td>N 70,000.00</td>
//             <td>
//             <p className="msg-cnt-dot">...</p>
//             </td>
//           </tr>
//           <tr>
//             <td className="first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <h4>Ogbeni Malani</h4>
//                 <p className='recoveryID'> ID202390112 </p>
//                 {/* <span>more info</span> */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//               <p className="approved-down">
//                 <img src={approvedTransparent} alt="" /> Approved
//               </p>
//             </td>
//             <td>332</td>
//             <td>N 50,000.00</td>
//             <td>N 10,000.00</td>
//             <td>
//             <p className="msg-cnt-dot">...</p>
//             </td>
//           </tr>
//           <tr>
//             <td className="first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <h4>Ogbeni Malani</h4>
//                 <p className='recoveryID'> ID202390112 </p>
//                 {/* <span>more info</span> */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//               <p className="approved-down">
//                 <img src={approvedTransparent} alt="" /> Approved
//               </p>
//             </td>
//             <td>810</td>
//             <td>N 35,000.00</td>
//             <td>N 2,000.00</td>
//             <td>
//             <p className="msg-cnt-dot">...</p>
//             </td>
//           </tr>
//           <tr>
//             <td className="first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <h4>Muktarr Bello</h4>
//                 <p className='recoveryID'> ID202390112 </p>
//                 {/* <span>more info</span> */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//               <p className="approved-down">
//                 <img src={approvedTransparent} alt="" /> Approved
//               </p>
//             </td>
//             <td>205</td>
//             <td>N 102,000.00</td>
//             <td>N 20,000.00</td>
//             <td>
//             <p className="msg-cnt-dot">...</p>
//             </td>
//           </tr>
//           <tr>
//             <td className="first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <h4>Rukayat stute</h4>
//                 <p className='recoveryID'> ID202390112 </p>
//                 {/* <span>more info</span> */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//               <p className="approved-down rejected-reject">
//                 <img src={rejectedTransparent} alt="" /> Rejected
//               </p>
//             </td>
//             <td>330</td>
//             <td>N 72,000.00</td>
//             <td>N 70,000.00</td>
//             <td>
//             <p className="msg-cnt-dot">...</p>
//             </td>
//           </tr>checkout 
          
//         </tbody>
//       </table>
//     </div>
//     <div className="goTo">
//         <button className="prev">
//           <span className="arrow-left">&larr;</span>Prev
//         </button>
//         <div className="numbers">
//           <button>1</button>
//           <button>2</button>
//           <button>...</button>
//           <button>5</button>
//           <button>6</button>
//         </div>
//         <button className="next">
//           Next<span className="arrow-right">&rarr;</span>
//         </button>
//       </div>

//     </div>
    
//   );
// };

// export default DashBoard1_Down;