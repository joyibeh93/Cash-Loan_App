import React from "react";
import Models from "./Models";
import Notifications2 from "./Notifications2";
import Security from "./Security";
import Activity from "./Activity";
import { useState } from "react";
import SettingsModal from "./SettingsModal";
import DataVisualization from './DataVisualisation';
import { useNavigate } from "react-router-dom";


const SettingContent = () => {
  const [setting, setSetting] = useState(false);
  const [markAllClicked, setMarkAllClicked] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [ clickAll, setClickAll] = useState(false);
  const [userInputData, setUserInputData] = useState(null);
  const navigate= useNavigate()

  const handleMarkAllClick = () => {
    setMarkAllClicked(!markAllClicked);
    setClickAll(true);
  };

  const handleSaveNavigation=(data)=>{
    setUserInputData(data)
    const encodedData = encodeURIComponent(JSON.stringify(data));
    navigate(`/LoanPrediction?data=${encodedData}`);

  }

  

  return (
    <div className="messageContent" >
      {settingsModalOpen && (
        <SettingsModal
          closeModal={setSettingsModalOpen}
          setMarkAllClicked={setMarkAllClicked}
          setClickAll = {setClickAll}
          onSave={handleSaveNavigation}
        />
      )}
         <div className="msg-top-bar">
        <div>
          <p className="msg-cnt-mb">
            Settings <span>&gt;</span>{" "}
            {setting === "models" ? "Models" : "Notification"  }
             </p>
          <h1>Settings</h1>
        </div>
        {setting === "Model" ? (
          <div className="exit-new">
            <button className="markAll">Manage</button>
            {markAllClicked ? (
              <button className="markRead" onClick={() => setClickAll(!clickAll)} >
                Create New Model
              </button>
            ) : (
              <button className="markRead" onClick={() =>setSettingsModalOpen(true)}>
                Create New Model
              </button>
            )}
          </div>
            


       ) : (
        <div className="back-nav">
        <button className="markAll" >
         Turn ALL OFF
       </button>
       {markAllClicked ? (
         <button className="markRead" onClick={() => setSettingsModalOpen(true)}>
           Turn  ALL ON
         </button>
       ) : (
         <button className="markRead" onClick={handleMarkAllClick}>
          Turn ALL On
        </button>
        )
     }
   
     </div>
        )} 


      </div>
        <div className="categories">
          <div className="msg-section" onClick={() => setSetting("Model")}>
            <p>Model</p>
            <div
              className="msg-line"
              style={
                setting === "Model"
                  ? { backgroundColor: "#747a74" }
                  : { backgroundColor: "#bac0ba" }
              }></div>
      
        </div>
    
        <div className="msg-section" onClick={() => setSetting("notification")}>
          <p>Notifications</p>
          <div
            className="msg-line"
            style={
              setting === "notification"
                ? { backgroundColor: "#747a74" }
                : { backgroundColor: "#bac0ba" }
            }></div>
            
        </div>
        <div className="msg-section" onClick={() => setSetting("security")}>
          <p>Security & Privacy</p>
          <div
            className="msg-line add"
            style={
              setting === "security&privacy"
                ? { backgroundColor: "#747a74" }
                : { backgroundColor: "#bac0ba" }
            }></div>
        </div>
        <div className="msg-section" onClick={() => setSetting("activity")}>
          <p>Activity</p>
          <div
            className="msg-line "
            style={
              setting === "activity"
                ? { backgroundColor: "#747a74" }
                : { backgroundColor: "#bac0ba" }
            }></div>
            </div>
        </div>
        {setting === "Model" ? (
          <Models />
        ) : setting === "notification" ? (
          <Notifications2 />
        ) : setting === "security" ? (
          <Security />
        ) : (
          <Activity />
        )}
          {userInputData && <DataVisualization data={userInputData} creditScore={userInputData.variables[0].value}  />}
      </div>
    
  );
};

export default SettingContent;
