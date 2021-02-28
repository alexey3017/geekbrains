import { useCallback } from "react";

function Message(props) {
  const renderMessage = useCallback(
    (message, idx) => (
      <li key={idx}>
        <h3>{message.author}:</h3>
        <p>{message.text}</p>
      </li>
    ),
    []
  );
  return (
    <div>
      <ul>{props.messages.map(renderMessage)}</ul>
    </div>
  );
}

export default Message;
