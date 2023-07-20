// import React from 'react';
// import '../Styles/Dashboard-down.css';
// import download from '../assets/Download.svg';
// import downArrow from '../assets/down-arrow.svg';
// import userIcon from '../assets/user-icon.svg';
// import approvedTransparent from '../assets/approved-transparent.svg';
// import rejectedTransparent from '../assets/rejected-transparent.svg';
// import pendingTransparent from '../assets/pending-transparent.svg';
// import Paginatination from './paginatination';
// import { Link } from "react-router-dom"

// const DashBoard1_Down = () => {
//   return (
//     <div className="dashDown-Table">
//       <div className="dashDown-tablehead">
//         <div className="dashdown-div"  >
//           <h3 className='dashDown-h3'>All Applications</h3>
//           <span >Sorted by Date</span>
//         </div>
//         <img src={download} alt="download-icon" className='dashdown-icon' />
//       </div>
//       <table>
//         <thead>
//           <tr >
//             <th className='dash-th'>Product</th>
//             <th>
//               Date <img src={downArrow} alt="" />{' '}
//             </th>
//             <th >
//               Status <img src={downArrow} alt="" />{' '}
//             </th>
//             <th>
//               Credit Score <img src={downArrow} alt="" />{' '}
//             </th>
//             <th>
//               Amount <img src={downArrow} alt="" />{' '}
//             </th>
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
//       <Paginatination/>
  
//     </div>
//   );
// };

// export default DashBoard1_Down;

import React from 'react';
import '../Styles/Dashboard-down.css';
import download from '../assets/Download.svg';
import downArrow from '../assets/down-arrow.svg';
import userIcon from '../assets/user-icon.svg';
import approvedTransparent from '../assets/approved-transparent.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
import pendingTransparent from '../assets/pending-transparent.svg';
import Paginatination from './paginatination';
import { Link } from 'react-router-dom';

const DashBoard1_Down = ({ data }) => {
  return (
    <div className="dashDown-Table">
      <div className="dashDown-tablehead">
        <div className="dashdown-div">
          <h3 className="dashDown-h3">All Applications</h3>
          <span>Sorted by Date</span>
        </div>
        <img src={download} alt="download-icon" className="dashdown-icon" />
      </div>
      <table>
        <thead>
          <tr>
            <th className="dash-th">Product</th>
            <th>
              Date <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Status <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Credit Score <img src={downArrow} alt="" />{' '}
            </th>
            <th>
              Amount <img src={downArrow} alt="" />{' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="dashDown-first-data">
                <img src={userIcon} alt="user-icon" />{' '}
                <div className="data-title">
                  <h4>{item.name}</h4>
                  <Link to={`/applicantinfo/${item.id}`}> ID - {item.id} </Link>
                </div>
              </td>
              <td>{item.date}</td>
              <td>
              <p className={item.status === 'Approved' ? 'dashDown-approved' : item.status === 'Rejected' ? 'dashDown-rejected' : 'dashDown-pending'}>
                    <img
                      src={
                        item.status === 'Approved'
                          ? approvedTransparent
                          : item.status === 'Rejected'
                          ? rejectedTransparent
                          : pendingTransparent
                      }
                      alt={item.status}
                    />
                    {item.status}
                  </p>
              </td>
              <td>{item.creditScore}</td>
              <td>{item.amount}</td>
              <td>
                <img src={download} alt="download" className="dashDown-img" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginatination />
    </div>
  );
};

export default DashBoard1_Down;
