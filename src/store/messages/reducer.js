import { ADD_TO_MESSAGE } from "./actions";
import { AUTHORS } from "../../utils/constants";

const initialState = {
  messageList: {
    ["id1"]: [
      { author: AUTHORS.ME, text: "Привет" },
      { author: AUTHORS.BOT, text: "Привет я бот Валера" },
      { author: AUTHORS.BOT, text: "Давай общаться?" },
    ],

    ["id2"]: [{ author: AUTHORS.ME, text: "Привет Алиса" }],
    ["id3"]: [
      { author: AUTHORS.ME, text: "Привет" },
      { author: AUTHORS.BOT, text: "Как твои дела?" },
    ],
  },
};

const messagesReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_MESSAGE: {
      const currentList = state.messageList[action.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentList,
            {
              ...action.message,
              id: `${action.chatId}${currentList.length}`,
            },
          ],
        },
      };
    }
    default:
      return state;
  }
};
export default messagesReduce;
