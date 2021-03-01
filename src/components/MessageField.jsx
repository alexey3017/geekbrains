import MessagesList from "./Message";
import React, { useCallback, useState, useEffect } from "react";
import MessageForm from "./MessageForm";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

function MessageField(props) {
  const [messages, setMessages] = useState([
    { author: "Валера", text: "Привет я бот Валера" },
    { author: "Валера", text: "Давай общаться?" },
  ]);

  const addMesage = useCallback((msg) => {
    const message = {
      author: "Алексей",
      text: msg,
    };
    setMessages([...messages, message]);
  });

  const onAnwerBot = useCallback(() => {
    const message = {
      author: "Валера",
      text: "Настало мое время! Я Валера!",
    };
    setMessages([...messages, message]);
  });
  useEffect(() => {
    if (messages[messages.length - 1].author === "Алексей") {
      setTimeout(onAnwerBot, 500);
    }
  }, [messages]);
  return (
    <Grid item xs={9}>
      <MessagesList messages={messages} />
      <Divider />
      <Grid container style={{ padding: "20px" }}>
        <MessageForm addToMessage={addMesage} />
      </Grid>
    </Grid>
  );
}

export default MessageField;
