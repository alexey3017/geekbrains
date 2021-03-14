import { URL } from "../../utils/constants";
import axios from "axios";

export const GET_POSTS = "POSTS::GET_POSTS";
export const GET_POSTS_REQUEST = "POSTS::GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "POSTS::GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "POSTS::GET_POSTS_FAILURE";

export const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

export const getPostsSuccess = (data) => ({
  type: GET_POSTS_SUCCESS,
  payload: data,
});

export const getPostsFailure = (err) => ({
  type: GET_POSTS_FAILURE,
  payload: err,
});

export const getPosts = () => async (dispatch) => {
  dispatch(getPostsRequest());
  axios
    .get(URL)
    .then((response) => dispatch(getPostsSuccess(response.data)))
    .catch((error) => dispatch(getPostsFailure(error.message)));
};
