import React from "react";
import Button from "./Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#757575",
    },
  },
});
function Header() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Чат React
          </Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default Header;
