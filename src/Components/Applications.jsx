// import React from 'react';
// import { Link, useParams } from 'react-router-dom';

// const Applications = ({ applicationData }) => {
//   const { id } = useParams();

//   // Retrieve the application data using the id parameter
//   const application = applicationData.find(app => app.id === parseInt(id, 10));

//   if (!applications) {
//     return <div>Error: Application not found</div>;
//   }

//   return (
//     <div>
//       <h2>Application Details</h2>
//       <div>
//         <p><strong>ID:</strong> {application.id}</p>
//         <p><strong>Name:</strong> {application.name}</p>
//         <p><strong>Date:</strong> {application.date}</p>
//         <p><strong>Status:</strong> {application.status}</p>
//         <p><strong>Credit Score:</strong> {application.creditScore}</p>
//         <p><strong>Amount:</strong> {application.amount}</p>
//         {/* Add more application details here */}
//       </div>
//       {/* <Link to="/dashboard">Back to Dashboard</Link> */}
//     </div>
//   );
// };

// export default Applications;
