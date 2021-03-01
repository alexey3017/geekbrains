import Grid from "@material-ui/core/Grid";

import MessageField from "./components/MessageField";
import Header from "./components/Header";
import ChatList from "./components/ChatList";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Header />
        <ChatList />
        <MessageField />
      </Grid>
    </div>
  );
}

export default App;
