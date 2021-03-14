import { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  messageArea: {
    height: "70vh",
    padding: "10px 0 0 10px",
    borderBottom: "1px solid #e0e0e0;",
    margin: "0 0 20px",
    overflowX: "auto",
  },
  borderRight: {
    height: "90vh",
    borderRight: "1px solid #e0e0e0;",
  },
  message: {
    padding: "10px",
  },
  me: {
    textAlign: "right",
    paddingRight: "20px",
  },
});

function MessagesList({ messages }) {
  const classes = useStyles();

  const renderMessage = useCallback(
    (message, idx) => (
      <li
        key={idx}
        className={`${classes.message} ${
          message.author === "Я" ? classes.me : ""
        }`}
      >
        <h3>{message.author}:</h3>
        <p>{message.text}</p>
      </li>
    ),
    []
  );

  return (
    <div>
      <ul className={classes.messageArea}>{messages.map(renderMessage)}</ul>
    </div>
  );
}

export default MessagesList;
