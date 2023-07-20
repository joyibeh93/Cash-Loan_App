// import React from 'react'
// import download from '../assets/Download.svg';
// import downArrow from '../assets/down-arrow.svg';
// import userIcon from '../assets/user-icon.svg';
// import approvedTransparent from '../assets/approved-transparent.svg';
// import rejectedTransparent from '../assets/rejected-transparent.svg';
// import pendingTransparent from '../assets/pending-transparent.svg';
// import '../Styles/Dashboard-down.css';
// import { Link } from 'react-router-dom';

// function ApplicationContent() {
//   return (
//     <div>
//       <div style={{marginBottom:"20px"}}>
//             <ul>
//                 <li>Applications</li>
//                 <li className='appcnt'> All Applications</li>
//             </ul>
//         </div>
//         <div className="dashBoardTable">
//       <div className="tablehead">
//         <div>
//           <h3>All Applications</h3><br/>
//           <span>Sorted by Date</span>
//         </div>
//         <img src={download} alt="download-icon" />
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>
//               Date <img src={downArrow} alt="down-arrow" />{' '}
//             </th>
//             <th>
//               Status <img src={downArrow}  alt="down-arrow" />{' '}
//             </th>
//             <th>
//               Credit Score <img src={downArrow}  alt="down-arrow" />{' '}
//             </th>
//             <th>
//               Amount <img src={downArrow} alt="down-arrow" />{' '}
//             </th>
//             <th>Download </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="dashDown-first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title"  >
//                 <h4>Ogbeni Malani</h4>
//                 <Link to="/applicantinfo"> ID - 20239078 </Link>
//                 {/* <span>more info</span> */}
//               </div>
//             </td >
//             <td >02 / 04 / 23</td>
//             <td>
//               <p className="dashDown-approved">
//                 <img src={approvedTransparent} alt="approved"/> Approved
//               </p>
//             </td>
//             <td>810</td>
//             <td>N 35,000.00</td>
//             <td>
//               <img src={download} alt="download" className='dashDown-img' />
//             </td>
//           </tr>
//           <tr>
//             <td className="dashDown-first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <h4>Muktarr Bello</h4> 
//                 <span><Link to="/applicantinfo"> ID - 20239079 </Link></span>
//                 {/* more info */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//             <p className="dashDown-approved">
//                 <img src={approvedTransparent} alt="approved"/> Approved
//               </p>
//             </td>
//             <td>205</td>
//             <td>N 102,000.00</td>
//             <td>
//               <img className='dashDown-img' src={download} alt="" />
//             </td>
//           </tr>
//           <tr>
//             <td className="dashDown-first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <h4>Rukayat Ade</h4>
//                 <Link to="/applicantinfo"> ID - 20239080 </Link>
//                 {/* <span>more info</span> */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//             <p className="dashDown-rejected">
//                 <img src={rejectedTransparent} alt="transparent"  /> Rejected </p>
//             </td>
//             <td>332</td>
//             <td>N 35,000.00</td>
//             <td>
//               <img src={download} alt="" className='dashDown-img' />
//             </td>
//           </tr>
//           <tr>
//             <td className="dashDown-first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title"  >
//                 <h4>Ogbeni Malani</h4>
//                 <Link to="/applicantinfo"> ID - 20239078 </Link>
//                 {/* <span>more info</span> */}
//               </div>
//             </td >
//             <td >02 / 04 / 23</td>
//             <td>
//               <p className="dashDown-approved">
//                 <img src={approvedTransparent} alt="approved"/> Approved
//               </p>
//             </td>
//             <td>810</td>
//             <td>N 35,000.00</td>
//             <td>
//               <img src={download} alt="download" className='dashDown-img' />
//             </td>
//           </tr>
//           <tr>
//             <td className="dashDown-first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <h4>Muktarr Bello</h4> 
//                 <span><Link to="/applicantinfo"> ID - 20239079 </Link></span>
//                 {/* more info */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//               <p className="dashDown-rejected">
//                 <img src={rejectedTransparent} alt="transparent"  /> Rejected </p>
//             </td>
//             <td>205</td>
//             <td>N 102,000.00</td>
//             <td>
//               <img className='dashDown-img' src={download} alt="" />
//             </td>
//           </tr>
//           <tr>
//             <td className="dashDown-first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <h4>Ogbeni Malani</h4>
//                 <Link to="/applicantinfo"> ID - 20239077 </Link>
//                 {/* <span>more info</span> */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//               <p className="dashDown-pending">
//                 <img src={pendingTransparent} alt="transparent" />  Pending
//               </p>
//             </td>
//             <td>332</td>
//             <td>N 35,000.00</td>
//             <td>
//               <img src={download} alt="" className='dashDown-img' />
//             </td>
//           </tr>
//           <tr>
//             <td className="dashDown-first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <h4>Muktarr Bello</h4> 
//                 <span><Link to="/applicantinfo"> ID - 20239079 </Link></span>
//                 {/* more info */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//               <p className="dashDown-rejected">
//                 <img src={rejectedTransparent} alt="transparent"  /> Rejected </p>
//             </td>
//             <td>205</td>
//             <td>N 102,000.00</td>
//             <td>
//               <img className='dashDown-img' src={download} alt="" />
//             </td>
//           </tr>
//           <tr>
//             <td className="dashDown-first-data">
//               <img src={userIcon} alt="user-icon" />{' '}
//               <div className="data-title">
//                 <h4>Ogbeni Malani</h4>
//                 <Link to="/applicantinfo"> ID - 20239077 </Link>
//                 {/* <span>more info</span> */}
//               </div>
//             </td>
//             <td>02 / 04 / 23</td>
//             <td>
//               <p className="dashDown-pending">
//                 <img src={pendingTransparent} alt="transparent" />  Pending
//               </p>
//             </td>
//             <td>332</td>
//             <td>N 35,000.00</td>
//             <td>
//               <img src={download} alt="" className='dashDown-img' />
//             </td>
//           </tr>
//         </tbody>
       
//       </table>
//     </div>
//     </div>
       
    
//   );
// }

// export default ApplicationContent



import React from 'react';
import download from '../assets/Download.svg';
import downArrow from '../assets/down-arrow.svg';
import userIcon from '../assets/user-icon.svg';
import approvedTransparent from '../assets/approved-transparent.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
import pendingTransparent from '../assets/pending-transparent.svg';
import '../Styles/Dashboard-down.css';
import { Link } from 'react-router-dom';

function ApplicationContent({ filteredData }) {
  return (
    <div >
      <div style={{ marginBottom: '20px' }}>
        <ul>
          <li>Applications</li>
          <li className="appcnt"> All Applications</li>
        </ul>
      </div>
      <div className="dashBoardTable dashDown-Table">
        <div className="tablehead">
          <div>
            <h3>All Applications</h3>
            <br />
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
                Status <img src={downArrow} alt="down-arrow" />{' '}
              </th>
              <th>
                Credit Score <img src={downArrow} alt="down-arrow" />{' '}
              </th>
              <th>
                Amount <img src={downArrow} alt="down-arrow" />{' '}
              </th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item2,index) => (
              <tr key={`${item2.id}-${index}`}>
                <td className="dashDown-first-data">
                  <img src={userIcon} alt="user-icon" />{' '}
                  <div className="data-title">
                    <h4>{item2.name}</h4>
                    <Link to={`/applicantinfo/${item2.id}`}> ID - {item2.id} </Link>
                  </div>
                </td>
                <td>{item2.date}</td>
                <td>
                  <p className={item2.status === 'Approved' ? 'dashDown-approved' : item2.status === 'Rejected' ? 'dashDown-rejected' : 'dashDown-pending'}>
                    <img
                      src={
                        item2.status === 'Approved'
                          ? approvedTransparent
                          : item2.status === 'Rejected'
                          ? rejectedTransparent
                          : pendingTransparent
                      }
                      alt={item2.status}
                    />
                    {item2.status}
                  </p>
                </td>
                <td>{item2.creditScore}</td>
                <td>{item2.amount}</td>
                <td>
                  <img src={download} alt="download" className="dashDown-img" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApplicationContent;
