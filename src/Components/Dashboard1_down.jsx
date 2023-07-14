import React from 'react';
import '../Styles/Dashboard-down.css';
import download from '../assets/Download.svg';
import downArrow from '../assets/down-arrow.svg';
import userIcon from '../assets/user-icon.svg';
import approvedTransparent from '../assets/approved-transparent.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
import pendingTransparent from '../assets/pending-transparent.svg';
import Paginatination from './paginatination';
import { Link } from "react-router-dom"

const DashBoard1_Down = () => {
  return (
    <div className="dashDown-Table">
      <div className="dashDown-tablehead">
        <div className="dashdown-div"  >
          <h3 className='dashDown-h3'>All Applications</h3>
          <span >Sorted by Date</span>
        </div>
        <img src={download} alt="download-icon" className='dashdown-icon' />
      </div>
      <table>
        <thead>
          <tr >
            <th className='dash-th'>Product</th>
            <th>
              Date <img src={downArrow} alt="" />{' '}
            </th>
            <th >
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
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title"  >
                <h4>Ogbeni Malani</h4>
                <Link to="/applicantinfo"> ID - 20239078 </Link>
                {/* <span>more info</span> */}
              </div>
            </td >
            <td >02 / 04 / 23</td>
            <td>
              <p className="dashDown-approved">
                <img src={approvedTransparent} alt="approved"/> Approved
              </p>
            </td>
            <td>810</td>
            <td>N 35,000.00</td>
            <td>
              <img src={download} alt="download" className='dashDown-img' />
            </td>
          </tr>
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Muktarr Bello</h4> 
                <span><Link to="/applicantinfo"> ID - 20239079 </Link></span>
                {/* more info */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="dashDown-rejected">
                <img src={rejectedTransparent} alt="transparent"  /> Rejected </p>
            </td>
            <td>205</td>
            <td>N 102,000.00</td>
            <td>
              <img className='dashDown-img' src={download} alt="" />
            </td>
          </tr>
          <tr>
            <td className="dashDown-first-data">
              <img src={userIcon} alt="user-icon" />{' '}
              <div className="data-title">
                <h4>Ogbeni Malani</h4>
                <Link to="/applicantinfo"> ID - 20239077 </Link>
                {/* <span>more info</span> */}
              </div>
            </td>
            <td>02 / 04 / 23</td>
            <td>
              <p className="dashDown-pending">
                <img src={pendingTransparent} alt="transparent" />  Pending
              </p>
            </td>
            <td>332</td>
            <td>N 35,000.00</td>
            <td>
              <img src={download} alt="" className='dashDown-img' />
            </td>
          </tr>
        </tbody>
      </table>
      <Paginatination/>
  
    </div>
  );
};

export default DashBoard1_Down;

// import React, { useState } from 'react';
// import '../Styles/Dashboard-down.css';
// import download from '../assets/Download.svg';
// import downArrow from '../assets/down-arrow.svg';
// import userIcon from '../assets/user-icon.svg';
// import approvedTransparent from '../assets/approved-transparent.svg';
//import rejectedTransparent from '../assets/rejected-transparent.svg';
//import pendingTransparent from '../assets/pending-transparent.svg';
// import Paginatination from './paginatination';
// import { Link } from 'react-router-dom';

// const DashBoard1_Down = () => {
//   const [data, setData] = useState([
//     {
//       name: 'Ogbeni Malani',
//       date: '02 / 04 / 23',
//       status: 'Approved',
//       creditScore: 810,
//       amount: 'N 35,000.00',
//     },
//     {
//       name: 'Muktarr Bello',
//       date: '02 / 04 / 23',
//       status: 'Rejected',
//       creditScore: 205,
//       amount: 'N 102,000.00',
//     },
//     {
//       name: 'Ogbeni Malani',
//       date: '02 / 04 / 23',
//       status: 'Pending',
//       creditScore: 332,
//       amount: 'N 35,000.00',
//     },
//   ]);

//   const [searchName, setSearchName] = useState('');
//   const [searchDate, setSearchDate] = useState('');
//   const [searchStatus, setSearchStatus] = useState('');
//   const [searchCreditScore, setSearchCreditScore] = useState('');
//   const [searchAmount, setSearchAmount] = useState('');

//   const filterData = () => {
//     let filteredData = data;

//     if (searchName) {
//       filteredData = filteredData.filter((item) =>
//         item.name.toLowerCase().includes(searchName.toLowerCase())
//       );
//     }

//     if (searchDate) {
//       filteredData = filteredData.filter(
//         (item) => item.date === searchDate.trim()
//       );
//     }

//     if (searchStatus) {
//       filteredData = filteredData.filter(
//         (item) => item.status.toLowerCase() === searchStatus.toLowerCase()
//       );
//     }

//     if (searchCreditScore) {
//       filteredData = filteredData.filter(
//         (item) => item.creditScore.toString() === searchCreditScore.trim()
//       );
//     }

//     if (searchAmount) {
//       filteredData = filteredData.filter(
//         (item) => item.amount === searchAmount.trim()
//       );
//     }

//     return filteredData;
//   };

//   const handleNameChange = (e) => {
//     setSearchName(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     setSearchDate(e.target.value);
//   };

//   const handleStatusChange = (e) => {
//     setSearchStatus(e.target.value);
//   };

//   const handleCreditScoreChange = (e) => {
//     setSearchCreditScore(e.target.value);
//   };

//   const handleAmountChange = (e) => {
//     setSearchAmount(e.target.value);
//   };

//   const filteredData = filterData();

//   return (
//     <div className="dashDown-Table">
//       <div className="dashDown-tablehead">
//         <div className="dashdown-div">
//           <h3 className='dashDown-h3'>All Applications</h3>
//           <span>Sorted by Date</span>
//         </div>
//         <img src={download} alt="download-icon" className='dashdown-icon' />
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th className='dash-th'>Product</th>
//             <th>
//               Date <img src={downArrow} alt="" />{' '}
//             </th>
//             <th>
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
//           {filteredData.map((item, index) => (
//             <tr key={index}>
//               <td className="dashDown-first-data">
//                 <img src={userIcon} alt="user-icon" />
//                 <div className="data-title">
//                   <h4>{item.name}</h4>
//                   <Link to="/applicantinfo"> ID - 20239078 </Link>
//                 </div>
//               </td>
//               <td>{item.date}</td>
//               <td>
//                 <p className="dashDown-approved">
//                   <img src={approvedTransparent} alt="approved"/> {item.status}
//                 </p>
//               </td>
//               <td>{item.creditScore}</td>
//               <td>{item.amount}</td>
//               <td>
//                 <img src={download} alt="download" className='dashDown-img' />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Paginatination />
//     </div>
//   );
// };

// export default DashBoard1_Down;
