import React from "react";
import "../Styles/Create.css"; 

const SettingsModal = ({ closeModal, setMarkAllClicked, setClickAll }) => {
  return (
    <div className="mode">
      <div>
        <button
          className="close-btn"
          onClick={() => {
            closeModal(false);
            setMarkAllClicked(false);
            setClickAll(false);
          }}
        >
          &times;
        </button>
      </div>
      <div className="heading-mode">
        <h2> New Modal</h2>
        <p>Add new Modal and set the rules for prediction</p>
      </div>
      <div className="format">
        <p>Modal name</p>
        <input className="format-input" type="text" placeholder="Modal name" />
      </div>
      <div className="format">
        <p>Modal Description</p>
        <input
          className="format-input"
          type="text"
          placeholder="Short Description"
        />
      </div>
      <div className="body">
        <table>
          <thead>
            <th className="MainBody">Variable</th>
            <th className="MainBody"> Operator </th>
            <th className="MainBody"> Values/Variables </th>
            <th className="MainBody"> Del </th>
          </thead>
          <tbody>
            <tr>
              <td>Credit Score </td>
              <td>
                <input className="form-input" type="search" placeholder=">" />
              </td>
              <td>
                <input className="form-input" type="select" placeholder="720" />
              </td>
              <td><i class="fa fa-trash" aria-hidden="true"></i></td>
            </tr>
            <tr>
              <td>Credit to debit ratio</td>
              <td>
                <input
                  className="form-input"
                  type="select"
                  placeholder="select"
                />
              </td>
              <td>
                <input
                  className="form-input"
                  type="select"
                  placeholder="Select"
                />
              </td>
              <td><i class="fa fa-trash" aria-hidden="true"></i></td>
            </tr>
            <tr>
              <td>Credit Balance</td>
              <td>
                <input
                  className="form-input"
                  type="select"
                  placeholder="Select"
                />
              </td>
              <td>
                <input
                  className="form-input"
                  type="select"
                  placeholder="Select"
                />
              </td>
              <td><i class="fa fa-trash" aria-hidden="true"></i></td>
            </tr>
          </tbody>
        </table> 
        
        <div>
        <div className="foot-mode">
          <input
            className="form-input"
            type="text"
            placeholder="Add New Value    +" 
            
          />
        </div>

        <div className="foot-mode">
          <div>
            <input type="radio" />
            <label htmlFor="">All Conditions Must be Met</label>
          </div>
          <div>
            <input type="radio" />
            <label htmlFor="">Any of the Condition can be met</label>
          </div>
        </div>


            <button
              className="save"
              onClick={() => {
                closeModal(false);
                setMarkAllClicked(false);
                setClickAll(false);
              }}
            >
              Save
            </button>
          </div>
      </div>
   </div> 
  );
};

export default SettingsModal;
