import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel";
import db, { auth } from "../../firebase";
import { useEffect, useState } from "react";
// import down_arrow_white from "../../assets/arrow_down_white.svg";
import add_circle_white from "../../assets/add_circle_white.svg";
import signal_cellular from "../../assets/signal_cellular_alt_green.svg";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("channels").onSnapshot((snapShot) => {
      setChannels(
        snapShot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter New channel name");
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Pratyush Kumar</h3>
        {/* <img width="15" height="15" src={down_arrow_white} /> */}
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channersHeader">
          <div className="channelHeader">
            {/* <img
              width="15"
              height="15"
              // src="https://img.icons8.com/ios-filled/50/000000/chevron-down.png"
            /> */}
            <h3 className="textChannels">Channels</h3>
            <img onClick={handleAddChannel} src={add_circle_white} alt="" />
          </div>
        </div>
        <div className="channelList">
          {channels.map(({ id, channel }) => {
            return (
              <SidebarChannel
                key={id}
                id={id}
                channelName={channel.channelName}
              />
            );
          })}
        </div>
      </div>

      <div className="sidebar__voice">
        <span className="sidebar__voiceIcon" fontSize="large">
          <img src={signal_cellular} alt="" />
        </span>
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          {/* <span>info icon</span>
          <span>call Icon</span> */}
        </div>
      </div>
      <div className="sidebar__profile">
        <img
          onClick={() => {
            auth.signOut();
          }}
          src={user.photo}
          alt="avatar"
        />
        <div className="sidebarprofileInfo">
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
        </div>
        <div className="sidebar__profileIcons">
          {/* <span>mic icon</span>
          <span>headSet Icon</span>
          <span>setting Icon</span> */}
        </div>
      </div>
      {/* <div>
        Discovery
        <span className="zoom-plus">+ Zoom</span>
        <span>1.888.799.9666</span>
        <span> SALES PLANS </span>
        <span>JOIN A MEETING</span>
        <span>HOST A MEETING </span>
        <span>SIGN IN</span>
        <button>Sign up, Its free </button>
      </div>

      <div>Thank you for attending the meeting</div>

      <di>Audio Plan | Zoom Blog | Customer Case Studies</di>

      <div>
        © 2021 Zoom Video Communications, Inc. All rights reserved. Privacy &
        Legal Policies Support English
      </div> */}
    </div>
  );
};

export default Sidebar;
