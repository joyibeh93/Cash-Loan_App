import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const Chart = ({ data }) => {
  const [modelName, setModelName] = useState("");
  const [modelDescription, setModelDescription] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [creditBalance, setCreditBalance] = useState("");
  const [status, setStatus] = useState("");

  const COLORS = ["#00b300", "#ffa500", "#ff0000"]; // Green, Orange, Red colors

  const renderLegend = (props) => {

    const handleSubmit = () => {
      // Convert creditScore to a number for comparisons
      const score = Number(creditScore);
  
      // Determine the status for the pie chart
      let chartData = [
        { name: "Green", value: 0 },
        { name: "Orange", value: 0 },
        { name: "Red", value: 0 },
      ];
  
      if (score >= 720 && score <= 1000) {
        chartData[0].value = 1;
        setStatus("Green");
      } else if (score >= 451 && score <= 719) {
        chartData[1].value = 1;
        setStatus("Orange");
      } else if (score >= 0 && score <= 450) {
        chartData[2].value = 1;
        setStatus("Red");
      }
  
      // Call the API or perform other actions to save the data
  
      // You can pass chartData to an API, a parent component, or store it in state
      // For now, we'll use local state to pass it to the PieChart component
  
      setChartData(chartData);
    };
    const { payload } = props;
    return (
      <ul className="legend-list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: COLORS[index] }}
            />
            {entry.value}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
        <div className="chart-container">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          formatter={renderLegend}
        />
        <Tooltip />
      </PieChart>
    </div>
    <div>
     <table className="result-table">
     <thead>
       <tr>
         <th>Model Name</th>
         <th>Status</th>
         <th>Credit Score</th>
         <th>Credit Balance</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>{modelName}</td>
         <td>
           <button className={`status-btn ${status.toLowerCase()}`}>
             {status}
           </button>
         </td>
         <td>{creditScore}</td>
         <td>{creditBalance}</td>
       </tr>
     </tbody>
   </table>
  </div>
    

    </div>
    
  );
};

export default Chart;
