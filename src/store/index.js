import { createStore, combineReducers } from "redux";

import profileReducer from "./profile/reducer";
import chatsReducer from "./chats/reducer";
import messagesReduce from "./messages/reducer";

export default createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReduce,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
