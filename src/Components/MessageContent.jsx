import React, { useState } from "react";
import "../Styles/Inbox.css";
import Inbox from "./inbox";
import MsgForm from "./MsgForm";
import ThreadForm from "./ThreadForm";
import Modal from "./Modal";

function MessageContent( props) {
  const [message, setMessage] = useState("inbox");
  const [markAllClicked, setMarkAllClicked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [clickAll, setClickAll] = useState(false);

  const handleMarkAllClick = () => {
    setMarkAllClicked(!markAllClicked);
    setClickAll(true);
  };

  return (
    <div className="messageContent">
      {modalOpen && (
        <Modal
          closeModal={setModalOpen}
          setMarkAllClicked={setMarkAllClicked}
          setClickAll={setClickAll}
        />
      )}
      <div className="msg-top-bar">
        <div>
          <p className="msg-cnt-mb">
            Message <span>&gt;</span>{" "}
            {message === "inbox" ? "Inbox" : "Create New"}
          </p>
          <h1>Messages</h1>
        </div>
        {message === "inbox" ? (
          <div className="exit-new">
            <button className="markAll" onClick={() => setClickAll(!clickAll)}>
              Mark All
            </button>
            {markAllClicked ? (
              <button className="markRead" onClick={() => setModalOpen(true)}>
                Delete Marked
              </button>
            ) : (
              <button className="markRead" onClick={handleMarkAllClick}>
                Mark All as Read
              </button>
            )}
          </div>
        ) : (
          <p className="back-nav">
            <span className="back">&larr;</span>Back
          </p>
        )}
      </div>
      <div className="msg-nav">
        <div className="msg-section" onClick={() => setMessage("inbox")}>
          <p>Inbox</p>
          <div
            className="msg-line"
            style={
              message === "inbox"
                ? { backgroundColor: "#747a74" }
                : { backgroundColor: "#bac0ba" }
            }
          ></div>
        </div>
        <div className="msg-section" onClick={() => setMessage("new")}>
          <p>New</p>
          <div
            className="msg-line"
            style={
              message === "new"
                ? { backgroundColor: "#747a74" }
                : { backgroundColor: "#bac0ba" }
            }
          ></div>
        </div>
        <div className="msg-section">
          <p>Sent</p>
          <div className="msg-line"></div>
        </div>
        <div className="msg-section" onClick={() => setMessage("thread")}>
          <p>Thread</p>
          <div
            className="msg-line add"
            style={
              message === "thread"
                ? { backgroundColor: "#747a74" }
                : { backgroundColor: "#bac0ba" }
            }
          ></div>
        </div>
        <div className="msg-section">
          <p>Trash</p>
          <div className="msg-line"></div>
        </div>
      </div>
      {message === "inbox" ? (
        <Inbox clickAll={clickAll} />
      ) : message === "new" ? (
        <MsgForm />
      ) : message === "thread" ? (
        <ThreadForm />
      ) : (
        <Inbox data={props}/>
      )}
    </div>
  );
}

export default MessageContent;
