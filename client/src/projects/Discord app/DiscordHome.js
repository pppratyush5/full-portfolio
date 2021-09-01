import Sidebar from "./Sidebar";
import "./DiscordHome.css";
import Chat from "./Chat";
const DiscordHome = () => {
  return (
    <div className="discordApp">
      <Sidebar></Sidebar>
      <Chat></Chat>
    </div>
  );
};

export default DiscordHome;
