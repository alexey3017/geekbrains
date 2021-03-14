import { AUTHORS } from "../../utils/constants";

export const ADD_TO_MESSAGE = "MESSAGES::ADD_TO_MESSAGE";

export const addToMessage = (chatId, message) => ({
  type: ADD_TO_MESSAGE,
  chatId,
  message,
});

export const addMessageThunk = (chatId, message) => (dispatch, getState) => {
  dispatch(addToMessage(chatId, message));

  if (message.author !== AUTHORS.BOT) {
    setTimeout(() => {
      dispatch(
        addToMessage(chatId, {
          text: "Настало мое время я Бот Валера",
          author: AUTHORS.BOT,
        })
      );
    }, 1000);
  }
};
