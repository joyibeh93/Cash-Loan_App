// import React from "react";
// import { Pie } from "react-chartjs-2";
// import { useTable } from "react-table";

// const DataVisualization = ({ data }) => {
//   // Prepare data for the pie chart
//   const pieData = {
//     labels: data.variables.map((variable) => variable.variableName),
//     datasets: [
//       {
//         data: data.variables.map((variable) => variable.value),
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.6)",
//           "rgba(54, 162, 235, 0.6)",
//           "rgba(255, 206, 86, 0.6)",
//           "rgba(75, 192, 192, 0.6)",
//           "rgba(153, 102, 255, 0.6)",
//         ],
//       },
//     ],
//   };

//   // Prepare data for the table
//   const tableData = React.useMemo(
//     () => [
//       {
//         Header: "Variable",
//         accessor: "variableName",
//       },
//       {
//         Header: "Operator",
//         accessor: "operator",
//       },
//       {
//         Header: "Amount",
//         accessor: "value",
//       },
//     ],
//     []
//   );

//   const tableInstance = useTable({ columns: tableData, data: data.variables });

//   return (
//     <div>
//       <h3>Pie Chart</h3>
//       <Pie data={pieData} width={100} height={100} />

//     <div>
//       <h3>Table</h3>
//       <table>
//         <thead>
//           {tableInstance.headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...tableInstance.getTableBodyProps()}>
//           {tableInstance.rows.map((row) => {
//             tableInstance.prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//     </div>


//   );
// };

// export default DataVisualization;


import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useTable } from "react-table";

const DataVisualization = ({ data , creditScore }) => {
  

  const backgroundColor = creditScore < 500 ? ["red", "white"] : ["green", "white"];

const pieData = {
  labels: data.variables.map((variable) => variable.variableName),
  datasets: [
    {
      label: "credit score",
      data: data.variables.map((variable) => variable.value),
      backgroundColor,
      borderColor: ["white", "white"],
      borderWidth: 4,
    },
  ],
};

  const tableData = React.useMemo(
    () => [
      {
        Header: "Variable",
        accessor: "variableName",
      },
      {
        Header: "Operator",
        accessor: "operator",
      },
      {
        Header: "Amount",
        accessor: "value",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns: tableData, data: data.variables });

  return (
    <div>
      <h3>Pie Chart</h3>
      <Doughnut data={pieData} width={100} height={100} />

      <h3>Table</h3>
      <table>
        <thead>
          {tableInstance.headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...tableInstance.getTableBodyProps()}>
          {tableInstance.rows.map((row) => {
            tableInstance.prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataVisualization;

