import { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  messageArea: {
    height: "70vh",
    padding: "10px 0 0 10px",
  },
  message: {
    padding: "10px",
  },
  me: {
    textAlign: "right",
    paddingRight: "20px",
  },
});

function Message(props) {
  const classes = useStyles();
  const renderMessage = useCallback(
    (message, idx) => (
      <li
        key={idx}
        className={classes.message}
        className={message.author === "Алексей" ? classes.me : null}
      >
        <h3>{message.author}:</h3>
        <p>{message.text}</p>
      </li>
    ),
    []
  );
  return (
    <div>
      <ul className={classes.messageArea}>
        {props.messages.map(renderMessage)}
      </ul>
    </div>
  );
}

export default Message;
