import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBarr";
import Admin from "./Pages/Admin";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import UsersList from "./Pages/UsersList";

function App() {
  const [isAuth, setisAuth] = useState(false);
  return (
    <div className="App">
      <NavBar setisAuth={setisAuth} isAuth={isAuth} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UsersList} />
        <Route path="/users/user/:id" component={Profile} />
        <Route path="/admin" component={Admin} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
