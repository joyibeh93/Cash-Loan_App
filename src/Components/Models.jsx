import React from 'react'
import "../Styles/settings.css"
import downArrow from '../assets/down-arrow.svg';
import rejectedTransparent from '../assets/rejected-transparent.svg';
import Padlock from './Padlock'; 
import approvedTransparent from '../assets/approved-transparent.svg'
import Toggle from './Toggle';




const Models= () => {
 
  
  return (
    <div style={{marginTop:"5em" }}>
        <div className='settings'>
          <table>
          <thead>
          <tr >
              <th >Model Name</th>
              <th >
                Status<img src={downArrow} alt="alt-arrow" />{' '}
              </th>
              <th >
                Date Created <img src={downArrow} alt="alt-arrow" />{' '}
              </th>
              <th>
                Created by <img src={downArrow} alt="alt-arrow" />{' '}
              </th>
              <th>
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td className="dashDown-first-data">
              < Toggle style={{ paddingLeft: '10px' }} />{' '}
              <div className="dashDown-data-title" style={{paddingLeft:'10px'}}  >
                <h4>Default Model</h4>
                <span>Machine Learning AI</span> 
              </div>
            </td >
            <td>01 / 04 / 23</td>
            <td>
              <p className="dashDown-approved">
                <img src={approvedTransparent} alt="" /> Active
              </p>
            </td>
            <td>Default</td>
            <td>{Padlock}</td>
            </tr>
            <tr>
            <td className="dashDown-first-data" >
              <Toggle style={{ paddingLeft: '10px' }} />{' '}
              <div className="data-title" style={{paddingLeft:'10px'}} >
                <h4>Alpha Model</h4>
                <span>Priotize Prev.Loans</span>
              </div>
            </td>
            <td>01 / 04 / 23</td>
            <td>
              <p className="dashDown-rejected">
                <img src={rejectedTransparent} alt=""  /> inactive
              </p>
            </td>
            <td>Admin</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          <tr>
            <td className="dashDown-first-data"  >
              <Toggle style={{ paddingLeft: '10px' }} />{' '}
              <div className="data-title" style={{paddingLeft:'10px'}}>
                <h4 >Credit First Model</h4>
                <span>Credit Score Main</span>
              </div>
            </td>
            <td>01 / 04 / 23</td>
            <td>
              <p className="dashDown-rejected">
                <img src={rejectedTransparent} alt="" /> inactive
              </p>
            </td>
            <td>Gbenga</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          <tr>
            <td className="dashDown-first-data"  >
              <Toggle style={{ paddingLeft: '10px' }} />{' '}
              <div className="data-title"style={{paddingLeft:'10px'}} >
                <h4>CSI Model</h4>
                <span>Credit Score Only</span>
              </div>
            </td>
            <td>01 / 04 / 23</td>
            <td>
              <p className="dashDown-rejected">
                <img src={rejectedTransparent} alt="" /> inactive
              </p>
            </td>
            <td>Gbenga</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>


          </tbody>


            </table>  
        </div>
        
      
    </div>
  )
}

export default Models