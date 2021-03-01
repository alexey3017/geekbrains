import Button from "./Button";
import React, { useCallback, useState } from "react";
import { TextField, ThemeProvider, createMuiTheme } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

function MessageForm({ addToMessage }) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#83b231",
      },
    },
  });

  const [value, setValue] = useState("");

  const textChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      if (value) {
        e.preventDefault();
        addToMessage(value);
        setValue("");
      } else {
        alert("Введите сообщение");
      }
    },
    [addToMessage, value]
  );
  return (
    <form onSubmit={handleSubmit}>
      <ThemeProvider theme={theme}>
        <TextField
          id="standard-textarea"
          type="text"
          label="Сообщение"
          placeholder="Введите текст..."
          color={"primary"}
          onChange={textChange}
          value={value}
        />
      </ThemeProvider>
      <Button type="submit">
        <SendIcon />
      </Button>
    </form>
  );
}

export default MessageForm;
