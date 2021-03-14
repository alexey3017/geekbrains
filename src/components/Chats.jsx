import { TextField, Fab, Button, Grid, List, Divider } from "@material-ui/core";
import { useState, useCallback, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessageThunk } from "../store/messages/actions";
import {
  ThemeProvider,
  useTheme,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";

import MessagesList from "./MessageList";
import { AUTHORS } from "../utils/constants";
import ChatList from "./ChatList";
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

  const chats = useSelector((state) => state.chats.chatList);
  const messages = useSelector((state) => state.messages.messageList);

  const dispatch = useDispatch();

  const selectedChat = useMemo(
    () => chats.find((chat) => chat.id === params.chatId),
    [params, chats]
  );

  const selectedChatIndex = useMemo(
    () => chats.findIndex((chat) => chat.id === params.chatId),
    [params, chats]
  );

  const messageList = useMemo(() => messages?.[selectedChat?.id] || [], [
    messages,
    selectedChat,
  ]);

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessageThunk(selectedChat?.id, { text, author }));
    },
    [selectedChat, dispatch]
  );

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
        <Grid item xs={9} sm={7} className={classes.borderRight}>
          <MessagesList messages={messageList} />
          <MessageForm onAddMessage={sendMessage} />
        </Grid>
      </Grid>
    </>
  );
}
