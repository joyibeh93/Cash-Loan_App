import React from "react";

const notifications = () => {
  return (
    <div className="notificationsContainer">
      {/* Top bar */}
      <div className="topBar">
        <p>
          Notifications <span>&gt;</span>
        </p>
        <div className="titleAndSettings">
          <h2>Notifications</h2>
          <div className="buttonDiv">
            <button>Settings</button>
            <button>Mark all as read</button>
          </div>
        </div>
      </div>

      {/* Notification Bar */}
      <div className="notificationsDiv">
        <p>All Notifications</p>
        <p>Sorted by Date</p>
      </div>
      <div className="lineDiv"></div>

      {/* {notifications} */}
      <div className="notifications">
        <div className="notification">
          <input type="checkbox" name="checked" />
          <div className="notificationDiv">
            <h3 className="name">Application Report</h3>
            <p className="text">
              The short term loan of Ogbeni Mallam Stutern (003556Z) just got
              approved with a 70% prediction metric
            </p>
          </div>
          <p className="notif-dot">...</p>
        </div>
        <div className="lineDiv"></div>
        <div className="notification">
          <input type="checkbox" name="checked" />
          <div className="notificationDiv">
            <h3 className="name">Security Alert</h3>
            <p className="text">
              A new device has logged into your account. If this was not you,
              please change your password immediately.
            </p>
          </div>
          <p className="notif-dot">...</p>
        </div>
        <div className="lineDiv"></div>
        <div className="notification">
          <input type="checkbox" name="checked" />
          <div className="notificationDiv">
            <h3 className="name">Application Report</h3>
            <p className="text">
              The long term loan of Pelumi Stutern (003557Z) just got rejected
              with a 50% prediction metric
            </p>
          </div>
          <p className="notif-dot">...</p>
        </div>
        <div className="lineDiv"></div>
        <div className="notification">
          <input type="checkbox" name="checked" />
          <div className="notificationDiv">
            <h3 className="name">New Resources</h3>
            <p className="text">
              A new tutorial has been published in the resource channel.
            </p>
          </div>
          <p className="notif-dot">...</p>
        </div>
        <div className="lineDiv"></div>
        <div className="notification">
          <input type="checkbox" name="checked" />
          <div className="notificationDiv">
            <h3 className="name">System Updates</h3>
            <p className="text">
              A new web app version 5.0 will be launched by 30th of May.
            </p>
          </div>
          <p className="notif-dot">...</p>
        </div>
        <div className="lineDiv"></div>
        <div className="notification">
          <input type="checkbox" name="checked" />
          <div className="notificationDiv">
            <h3 className="name">Application Download</h3>
            <p className="text">
              You just downlaoded the application report of Ogbeni Mallam
              (003556Z)
            </p>
          </div>
          <p className="notif-dot">...</p>
        </div>
        <div className="lineDiv"></div>
      </div>

      {/* {Go-to} */}
      <div className="goTo">
        <button>
          <span>&larr;</span>Prev
        </button>
        <div className="numbers">
          <button>1</button>
          <button>2</button>
          <button>
            ...
          </button>
          <button>5</button>
          <button>6</button>
        </div>
        <button>
          <span>&rarr;</span>Next
        </button>
      </div>
    </div>
  );
};

export default notifications;
