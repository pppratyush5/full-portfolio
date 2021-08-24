import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel";
import db, { auth } from "../../firebase";
import { useEffect, useState } from "react";
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
        {/* <img src="./src/assets /downArrow.png" width="50" height="50" alt="" /> */}
        <img
          width="15"
          height="15"
          // src="https://img.icons8.com/ios-filled/50/000000/chevron-down.png"
        />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channersHeader">
          <div className="channelHeader">
            <img
              width="15"
              height="15"
              // src="https://img.icons8.com/ios-filled/50/000000/chevron-down.png"
            />
            <h4 className="textChannels">Text Channels</h4>
            <span onClick={handleAddChannel}>Add Icon</span>
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
          signal icons
        </span>
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <span>info icon</span>
          <span>call Icon</span>
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
          <span>mic icon</span>
          <span>headSet Icon</span>
          <span>setting Icon</span>
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
