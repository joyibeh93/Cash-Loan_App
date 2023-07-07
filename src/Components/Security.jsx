import React from 'react'
import Toggle from './Toggle'
import "../Styles/settings.css"


const Security = () => {
  return (
    <div style={{marginTop:"5em"}}>
       
    <div className="Msg-inbox">
        <table >
            <thead>
                <tr>
                <th style={{ borderBottom: '1px solid #b9bdc2' }}>Setting</th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Status
            </th>
            <th style={{ borderBottom: '1px solid #b9bdc2' }}>
              Edit/Set Value
            </th> 
                </tr>
            </thead>
            <tbody>
                <tr>
               <td>Two Factor authentication</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
               <td></td>
                </tr>
                <tr>
               <td>Biometetric authentication</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
               <td><i class="fa-regular fa-pen-to-square"/></td>
                </tr>
                <tr>
               <td>Login with security question</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
               <td><i class="fa-regular fa-pen-to-square"/></td>
                </tr>
                <tr>
               <td>Log out after 30 minutes inactive</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
               <td><i class="fa-regular fa-pen-to-square"/></td>
                </tr>
                <tr>
               <td>Only LAN/WAN login</td>
               <td>< Toggle style={{ paddingLeft: '20px' }} />{' '}</td>
               <td><i class="fa-regular fa-pen-to-square"/></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Security
