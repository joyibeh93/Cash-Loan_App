import React from "react";
import '../Styles/chart.css'
import RightArrow from '../assets/Right-arrow.svg'
import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const Chart = () => {

    const data = {
        labels: ["May 2018", "Aug 2019", "Sep 2020", "Jan 2021", "Dec 2021"],
        datasets: [
            {
                labels: ['Short-term', 'Long-term'],
                data: [50, 90, 60, 80, 40, 85],
                backgroundColor: '#454e5c',
            }],
    }

    const options = {

        plugins:{
            legend:false,
        },
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                grid:{
                    display:false
                },
                min:0,
                max:100,
                ticks:{
                    stepSize:25,
                    callback:(value)=>value + "k",
                    autoSkipPadding:0,  
                    maxTicksLimit: 4.5, 
                    
                },

            }
        }
    }
    
    return (
        
        <div className="container-pie ">
            <div>
            <div className="bar">
                <h4>Previous Loans</h4>
                <h6>Subtitle</h6>
                <hr />
            </div>
                
                
            <div>
                <h4>Maximum Loan Request</h4>
                <h3>N 92000</h3>
                </div>
                <Bar data={data} options={options}></Bar>
                <hr />
                <Link> More <img src={RightArrow} alt="right-arrow" /></Link>
            </div>
        </div>

    );
};

export default Chart;