import {
  GET_POSTS_REQUEST,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
} from "./actions";
import { STATUSES } from "../../utils/constants";

const initialState = {
  posts: [],
  request: STATUSES.IDLE,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        request: STATUSES.SUCCESS,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
