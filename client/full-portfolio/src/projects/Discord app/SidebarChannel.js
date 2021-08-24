import { useDispatch } from "react-redux";
import "./SidebarChannel.css";
import { setChannelInfo } from "../../features/counter/appSlice";

const SidebarChannel = ({ id, channelName }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="sidebarchannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelName: channelName,
            channelId: id,
          })
        )
      }
    >
      <h3>
        <span className="sidebarchannel__hash">#</span>
        {channelName}
      </h3>
    </div>
  );
};

export default SidebarChannel;
