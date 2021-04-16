import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import { history } from "./helpers/history"
import { clearMessage } from "./redux/actions/message";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"/>
  </div>
)

// Components
const TopMenu = React.lazy(() => import("./components/TopMenu"));
const Login = React.lazy(() => import("./components/Login"));
const Register = React.lazy(() => import("./components/Register"));
const Home = React.lazy(() => import("./components/Home"));
const Profile = React.lazy(() => import("./components/Profile"));
const BoardUser = React.lazy(() => import("./components/BoardUser"));

// Routes
const PrivateRoute = React.lazy(() => import('./helpers/PrivateRoute'));


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
    <HashRouter history={history}>
        <React.Suspense fallback={loading}>
          <TopMenu />
          <Switch>
            <Route exact path={["/", "/home"]} component={props => <Home {...props}/>} />
            <Route exact path="/login" component={props => <Login {...props}/>} />
            <Route exact path="/register" component={props => <Register {...props}/>} />
            <PrivateRoute exact path="/profile" component={props => <Profile {...props}/>} />
            <PrivateRoute exact path="/user" component={props => <BoardUser {...props}/>} />
          </Switch>
        </React.Suspense>
    </HashRouter>
  );
};

export default App;