import { ADD_CHAT } from "./actions";
import { AUTHORS } from "../../utils/constants";

const initialState = {
  chatList: [
    {
      id: "id1",
      name: "Remy Sharp",
      avatar: "https://material-ui.com/static/images/avatar/1.jpg",
      messageList: "id1",
      isBlinked: null,
    },
    {
      id: "id2",
      name: "Alice",
      avatar: "https://material-ui.com/static/images/avatar/3.jpg",
      messageList: "id2",
      isBlinked: null,
    },
    {
      id: "id3",
      name: "CindyBaker",
      avatar: "https://material-ui.com/static/images/avatar/2.jpg",
      messageList: "id3",
      isBlinked: null,
    },
  ],
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: `id${state.chatList.length}`,
            name: action.name,
            messageList: [],
          },
        ],
      };
    default:
      return state;
  }
};

export default chatsReducer;
