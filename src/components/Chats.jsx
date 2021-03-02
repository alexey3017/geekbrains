import { TextField, Fab, Button, Grid, List, Divider } from "@material-ui/core";
import { useState, useCallback, useEffect, useMemo } from "react";
import {
  ThemeProvider,
  useTheme,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MessagesList from "./MessageList";
import Input from "./MessageForm";
import { AUTHORS } from "../utils/constants";
import ChatList from "./ChatList";
import { usePrev } from "../utils/hooks";
import { useParams, useRouteMatch } from "react-router-dom";
import MessageForm from "./MessageForm";
const useStyles = makeStyles({
  borderRight: {
    height: "90vh",
    borderRight: "1px solid #e0e0e0;",
  },
});
export default function Chats() {
  const classes = useStyles();
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

  const addMessage = useCallback(
    (text, author) => {
      const newChats = [...chats];
      newChats[selectedChatIndex] = {
        ...selectedChat,
        messageList: [...selectedChat.messageList, { text, author }],
      };

      setChats(newChats);
    },
    [chats, selectedChat, selectedChatIndex]
  );
  useEffect(() => {
    let timeout;
    console.log();
    if (
      selectedChat?.messageList?.[selectedChat.messageList.length - 1]
        .author === "Я"
    ) {
      timeout = setTimeout(
        () => addMessage("Настало мое время! Я Валера!", AUTHORS.BOT),
        1000
      );
    }
    return () => clearTimeout(timeout);
  }, [chats, selectedChat, selectedChatIndex]);

  if (!params.chatId || !selectedChat) {
    return (
      <>
        <ChatList chats={chats} chatId={null} />
      </>
    );
  }

  return (
    <>
      <Grid container>
        <ChatList chats={chats} chatId={params.chatId} />
        <Divider />
        <Grid item xs={7} className={classes.borderRight}>
          <MessagesList messages={selectedChat?.messageList || []} />
          <MessageForm onAddMessage={addMessage} />
        </Grid>
      </Grid>
    </>
  );
}
