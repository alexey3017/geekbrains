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
  brr: {
    borderRadius: "15px",
  },
  ot: {
    padding: "0",
    margin: "0",
  },
});
function ChatList({ chats, chatId }) {
  const classes = useStyles();
  const renderChats = useCallback((chat, i) => (
    <ListItem key={i}>
      <Link to={`/chats/${chat.id}`}>
        <ListItemIcon
          style={{
            border: chat.id === chatId ? "1px solid #000000" : "",
            borderRadius: "15px",
            padding: "5px",
          }}
        >
          <Avatar alt={chat.name} src={chat.avatar} />
        </ListItemIcon>
      </Link>
      <ListItemText className={"visibility"}>
        <Link to={`/chats/${chat.id}`}>
          <b style={{ color: chat.id === chatId ? "#000000" : "grey" }}>
            {chat.name}
          </b>
        </Link>
      </ListItemText>
      <ListItemText
        className={"visibility"}
        secondary="online"
        align="right"
      ></ListItemText>
    </ListItem>
  ));
  return (
    <Grid item sm={5} xs={3} className={classes.borderRight500}>
      <List className={"chatlist"}>{chats.map(renderChats)}</List>
    </Grid>
  );
}
export default ChatList;
