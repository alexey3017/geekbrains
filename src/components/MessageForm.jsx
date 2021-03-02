import Button from "./Button";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { AUTHORS } from "../utils/constants";
import {
  TextField,
  ThemeProvider,
  createMuiTheme,
  Grid,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

function MessageForm({ onAddMessage }) {
  const textField = useRef(null);

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
        onAddMessage(value, AUTHORS.ME);
        setValue("");
      } else {
        alert("Введите сообщение");
      }
    },
    [onAddMessage, value]
  );
  useEffect(() => {
    if (textField.current) {
      textField.current.focus();
    }
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <ThemeProvider theme={theme}>
        <TextField
          style={{ width: "60%" }}
          id="standard-textarea"
          type="text"
          label="Сообщение"
          placeholder="Введите текст..."
          color="primary"
          onChange={textChange}
          value={value}
          inputRef={textField}
        />
      </ThemeProvider>
      <Button type="submit">
        <SendIcon />
      </Button>
    </form>
  );
}

export default MessageForm;
