import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Chats from "./components/Chats";
import Posts from "./components/Posts";
function Router() {
  return (
    <BrowserRouter>
      <ul className={"nav"}>
        <li className={"nav__list"}>
          <Link to="/" className={"nav__link"}>
            Главная
          </Link>
        </li>
        <li className={"nav__list"}>
          <Link to="/chats" className={"nav__link"}>
            Чаты
          </Link>
        </li>
        <li className={"nav__list"}>
          <Link to="/profile" className={"nav__link"}>
            Профиль
          </Link>
        </li>
        <li className={"nav__list"}>
          <Link to="/posts" className={"nav__link"}>
            Посты
          </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/chats/:chatId">
          <Chats />
        </Route>
        <Route exact path="/chats">
          <Chats />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
