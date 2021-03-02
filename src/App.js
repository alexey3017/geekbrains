import Grid from "@material-ui/core/Grid";
import MessageList from "./components/MessageList";
import ChatList from "./components/ChatList";
import React, { useCallback, useState, useEffect, useMemo } from "react";
import { AUTHORS } from "./utils/constants";
import { useParams, useRouteMatch } from "react-router-dom";

function Chats() {
  const params = useParams();
  const [chats, setChats] = useState([
    {
      id: "id1",
      name: "Remy Sharp",
      avatar: "https://material-ui.com/static/images/avatar/1.jpg",
      messageList: [
        { author: AUTHORS.ME, text: "Привет" },
        { author: AUTHORS.BOT, text: "Привет я бот Валера" },
        { author: AUTHORS.BOT, text: "Давай общаться?" },
      ],
    },
    {
      id: "id2",
      name: "Alice",
      avatar: "https://material-ui.com/static/images/avatar/3.jpg",
      messageList: [{ author: AUTHORS.ME, text: "Привет Алиса" }],
    },
    {
      id: "id3",
      name: "CindyBaker",
      avatar: "https://material-ui.com/static/images/avatar/2.jpg",
      messageList: [
        { author: AUTHORS.ME, text: "Привет" },
        { author: AUTHORS.BOT, text: "Как твои дела?" },
      ],
    },
  ]);
  const selectedChat = useMemo(
    () => chats.find((chat) => chat.id === params.chatId),
    [params, chats]
  );

  const selectedChatIndex = useMemo(
    () => chats.findIndex((chat) => chat.id === params.chatId),
    [params, chats]
  );
  if (!params.chatId || !selectedChat) {
    return (
      <>
        <span>Please select a chat</span>
        <ChatList chats={chats} chatId={null} />
      </>
    );
  }
  return (
    <div className="App">
      <Grid container>
        <ChatList chats={chats} chatId={params.chatId} />
        <MessageList messages={selectedChat?.messageList || []} />
      </Grid>
    </div>
  );
}

export default Chats;
