import React from 'react';
import {Line} from 'react-chartjs-2';
import '../Styles/Analytics.css'

import {
    Chart as ChartJs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function AnalyticsLineChart() {
    const data={
        labels:["Jan 23","Feb 23","Mar 23","Aprl 23","May 23","Jun 23","Jul 23","Aug 23","Sep 23","Oct 23","Nov 23","Dec 23"],
        datasets:[{
            // label:"Line 1",
            data:[25,32,30,23,20,25,30,40,50,55,57,100],
            borderColor:"red",
            tension:0.2,
            pointRadius:0

        },
        {
            // label:"Line 2",
            data:[15,8,20,25,40,60,40,65,50,45,35,25],
            borderColor:"green",
            tension:0.2,
            pointRadius:0

        }
    ]
    }
    const options={
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
                    callback:(value)=>value + "%",
                    autoSkipPadding:0
                }
            }
        }
    }
  return (
    <div className='AnalyticsChart'>
        <Line data={data} options={options}></Line>
    </div>
  )
}

export default AnalyticsLineChart
