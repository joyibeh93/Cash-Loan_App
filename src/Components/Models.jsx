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
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>Model Name</th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Status<img src={downArrow} alt="" />{' '}
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Date Created <img src={downArrow} alt="" />{' '}
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Created by <img src={downArrow} alt="" />{' '}
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Edit
            </th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td className="dashDown-first-data">
              < Toggle style={{ paddingLeft: '20px' }} />{' '}
              <div className="dashDown-data-title"  >
                <h4 style={{ paddingRight: '16px' }}>Default Model</h4>
                <span>Machine Learning AI</span> 
              </div>
            </td >
            <td style={{ borderBottom: '1px solid #b9bdc2' }}>01 / 04 / 23</td>
            <td>
              <p className="approved-btn">
                <img src={approvedTransparent} alt="" style={{ marginRight: '5px', padding:'5px' }} /> Active
              </p>
            </td>
            <td>Default</td>
            <td>{Padlock}</td>
            </tr>
            <tr>
            <td className="dashDown-first-data">
              <Toggle style={{ paddingLeft: '20px' }} />{' '}
              <div className="data-title">
                <h4 style={{ paddingRight: '16px' }}>Alpha Model</h4>
                <span>Priotize Prev.Loans</span>
              </div>
            </td>
            <td>01 / 04 / 23</td>
            <td>
              <p className="rejected-btn">
                <img src={rejectedTransparent} alt="" style={{ marginRight: '5px' }} /> inactive
              </p>
            </td>
            <td>Admin</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          <tr>
            <td className="dashDown-first-data">
              <Toggle style={{ paddingLeft: '20px' }} />{' '}
              <div className="data-title">
                <h4 style={{ paddingRight: '16px' }}>Credit First Model</h4>
                <span>Credit Score Main</span>
              </div>
            </td>
            <td>01 / 04 / 23</td>
            <td>
              <p className="rejected-btn">
                <img src={rejectedTransparent} alt="" style={{ marginRight: '5px' }} /> inactive
              </p>
            </td>
            <td>Gbenga</td>
            <td><i class="fa-regular fa-pen-to-square"></i></td>
          </tr>
          <tr>
            <td className="dashDown-first-data">
              <Toggle style={{ paddingLeft: '20px' }} />{' '}
              <div className="data-title">
                <h4 style={{ paddingRight: '16px' }}>CSI Model</h4>
                <span>Credit Score Only</span>
              </div>
            </td>
            <td>01 / 04 / 23</td>
            <td>
              <p className="rejected-btn">
                <img src={rejectedTransparent} alt="" style={{ marginRight: '5px' }} /> inactive
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