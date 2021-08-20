import "./SidebarChannel.css";
const SidebarChannel = ({ id, channelName }) => {
  return (
    <div className="sidebarchannel">
      <h3>
        <span className="sidebarchannel__hash">#</span>
        {channelName}
      </h3>
    </div>
  );
};

export default SidebarChannel;
