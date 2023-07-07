import React from 'react'
//import AnalyticsLineChart from './AnalyticsLineChart'
import AnalyticsLineChart from './AnalyticsLineChart'
import PieChart from './PieChart'
import Chart from './Chart'

import '../Styles/Analytics.css'




function AnalyticsContent() {
    
const colors=['red','white']
const AnlytScore='15%'
        
  return (
    <div>
        <div>
            <ul>
                <li> Dashboard</li>
                <li>Analytics</li>
            </ul>
        </div>
        <div className="notification">
            <div>
            <h2>Analytics</h2>
                <p className='msg-cnt-mb'>
                   Loan Performance Dashboard
                </p>
               
            </div>
            <div className="exit-new">
                <button className="existing">Info</button>
                <button className="new">Applicants</button>
            </div>
        </div>
        <div>
            <AnalyticsLineChart/>
        </div>
        <div className='chartAnalystics'>
            <div>
                <PieChart color={colors} Anlytper={AnlytScore}/>

            </div>
            <div>
                <Chart/>

            </div>
        </div>
                
    </div>
  )
}

export default AnalyticsContent