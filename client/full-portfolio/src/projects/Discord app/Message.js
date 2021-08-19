import "./Message.css";
const Message = () => {
  return (
    <div className="message">
      <span>avatar</span>
      <div className="message__info">
        <h4>
          pppratyush
          <span className="message__timestamp">this is a time span</span>
        </h4>
        <p>this is a message</p>
      </div>
    </div>
  );
};

export default Message;
