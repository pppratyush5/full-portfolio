import "./Message.css";
const Message = ({ timestamp, user, message }) => {
  return (
    <div className="message">
      <span>
        <img src={user.photo} alt="user photo" />
      </span>
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
