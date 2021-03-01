import React from "react";
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
function ChatList() {
  const classes = useStyles();
  return (
    <Grid item xs={3} className={classes.borderRight500}>
      <List className={"chatlist"}>
        <ListItem button key="RemySharp">
          <ListItemIcon>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          </ListItemIcon>
          <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
          <ListItemText secondary="online" align="right"></ListItemText>
        </ListItem>
        <ListItem button key="Alice">
          <ListItemIcon>
            <Avatar
              alt="Alice"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
          </ListItemIcon>
          <ListItemText primary="Alice">Alice</ListItemText>
        </ListItem>
        <ListItem button key="CindyBaker">
          <ListItemIcon>
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
          </ListItemIcon>
          <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
        </ListItem>
      </List>
    </Grid>
  );
}
export default ChatList;
