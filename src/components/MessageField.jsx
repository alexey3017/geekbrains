import MessagesList from "./Message";
import Button from "./Button";
import { useCallback, useState, useEffect } from "react";

function MessageField(props) {
  const [messages, setMessages] = useState([
    { author: "Валера", text: "Привет я бот Валера" },
    { author: "Валера", text: "Давай общаться?" },
  ]);

  const [message, setMessage] = useState("");

  const onSentMessage = useCallback((event) => {
    if (message.text !== "" || message.text !== "undefined") {
      setMessages([...messages, message]);
    } else {
      alert("Введите сообщение");
    }
  });

  const onChangeTextarea = useCallback((event) => {
    let text = event.target.value;
    const message = {
      author: "Алексей",
      text: text,
    };
    setMessage(message);
  }, []);

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
    <div className={"wrapper"}>
      <MessagesList messages={messages} />

      <div className={"wrapper__text"}>
        <textarea
          onChange={onChangeTextarea}
          value={props.message}
          placeholder="Введите сообщение"
        ></textarea>
      </div>
      <div className="button__wrapper">
        <Button type="submit" onClick={onSentMessage}>
          Отправить
        </Button>
      </div>
    </div>
  );
}

export default MessageField;
