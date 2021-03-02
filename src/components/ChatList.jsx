import { useCallback } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles({
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
    height: "90vh",
  },
});
function ChatList({ chats, chatId }) {
  const classes = useStyles();
  const renderChats = useCallback((chat, i) => (
    <ListItem key={i}>
      <ListItemIcon>
        <Avatar alt={chat.name} src={chat.avatar} />
      </ListItemIcon>
      <ListItemText>
        <Link to={`/chats/${chat.id}`}>
          <b style={{ color: chat.id === chatId ? "#000000" : "grey" }}>
            {chat.name}
          </b>
        </Link>
      </ListItemText>
      <ListItemText secondary="online" align="right"></ListItemText>
    </ListItem>
  ));
  return (
    <Grid item xs={4} className={classes.borderRight500}>
      <List className={"chatlist"}>{chats.map(renderChats)}</List>
    </Grid>
  );
}
export default ChatList;
