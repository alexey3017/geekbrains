import React, { useState } from "react";
import Button from "./Button";

function Messages() {
  const [messages, setMessages] = useState(["Выполнено"]);

  const addNumber = () => {
    const mess = "Исполнено";
    setMessages([...messages, mess]);
  };

  return (
    <div className="wrapper">
      <Button onClick={addNumber}>Добавить письмо</Button>
      <ul className="ul">
        <li>Список сообщений:</li>
        {messages.map((el, idx) => (
          <li key={idx}>
            <span>{idx + 1}. </span>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
