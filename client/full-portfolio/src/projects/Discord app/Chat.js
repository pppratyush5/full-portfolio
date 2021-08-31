import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectchannelId,
  selectchannelName,
} from "../../features/counter/appSlice";
import db from "../../firebase";
import firebase from "firebase";
import "./Chat.css";
import Message from "./Message";
import { selectUser } from "../../features/counter/userSlice";
import send_white from "../../assets/send_white.svg";

const Chat = () => {
  // const user = useSelector(selectchannelId);
  const user = useSelector(selectUser);
  const channelId = useSelector(selectchannelId);
  const channelName = useSelector(selectchannelName);
  const [input, setInput] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });

    setInput("");
  };

  return (
    <div className="chat">
      {/* chat header starts*/}
      <div className="chatHeader">
        <div className="chatHeader__left">
          <h3>
            <span className="charHeader__hash">#</span>
            {channelName}
          </h3>
        </div>
        <div className="chatHeader__right">
          {/* <span className="right__icon">noti icon</span>
          <span className="right__icon">editlocation icon</span>
          <span className="right__icon">people alt icon</span>
          <div className="chatHeader__search">
            <input placeholder="Search" type="text" />
          </div>
          <span className="right__icon">search icon</span>
          <span className="right__icon">help icon</span> */}
        </div>
      </div>
      {/* chat header ends */}

      <div
        className="chat__messages"
        // onScroll={() => {
        //   window.screenY = 800;
        //   console.log(window.screenY);
        // }}
      >
        {messages.map((message) => {
          return (
            <Message
              key={message?.timestamp?.seconds}
              timestamp={message.timestamp}
              message={message.message}
              user={message.user}
            ></Message>
          );
        })}
      </div>

      {/* input starts*/}
      <div className="chat__input">
        <img src={send_white} alt="" />
        <form>
          <input
            disabled={!channelId}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder={`Message ${
              channelName ? "#" + channelName : "Select Channel"
            }`}
          />
          <button
            type="submit"
            onClick={sendMessage}
            className="chat__inputButton"
          >
            send message
          </button>
        </form>
        <div className="chat__inputIcon">
          {/* <span>card gift icon</span>
          <span>GIF</span>
          <span>smile</span> */}
        </div>
      </div>
      {/* input ends */}
    </div>
  );
};

export default Chat;
