import "./Chat.css";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="chat">
      {/* chat header starts*/}
      <div className="chatHeader">
        <div className="chatHeader__left">
          <h3>
            <span className="charHeader__hash">#</span>
            test chennel name
          </h3>
        </div>
        <div className="chatHeader__right">
          <span className="right__icon">noti icon</span>
          <span className="right__icon">editlocation icon</span>
          <span className="right__icon">people alt icon</span>
          <div className="chatHeader__search">
            <input placeholder="Search" type="text" />
          </div>
          <span className="right__icon">search icon</span>
          <span className="right__icon">help icon</span>
        </div>
      </div>
      {/* chat header ends */}

      <div className="chat__messages">
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
      </div>

      {/* input starts*/}
      <div className="chat__input">
        <span>Add circle icon</span>
        <form>
          <input type="text" placeholder={"Message #TESTCHANNEL"} />
          <button type="submit" className="chat__inputButton">
            send message
          </button>
        </form>
        <div className="chat__inputIcon">
          <span>card gift icon</span>
          <span>GIF</span>
          <span>smile</span>
        </div>
      </div>
      {/* input ends */}
    </div>
  );
};

export default Chat;
