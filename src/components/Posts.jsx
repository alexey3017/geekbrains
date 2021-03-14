import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/posts/actions";
import { withMobileDialog } from "@material-ui/core";

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const renderPosts = useCallback(
    (post) => (
      <div className={"post__wrapper"} key={post.id}>
        <h6>{post.title}</h6>
        <p>{post.body}</p>
      </div>
    ),
    []
  );

  return (
    <>
      <h1 className={"h1"}>Список постов полученых через API</h1>
      <div className={"post"}>{posts?.map(renderPosts)}</div>
    </>
  );
}

export default Posts;
