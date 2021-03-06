import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import SplashPage from "./splash/splashPage";
import Dashboard from "./dashboard/dashboard";
import Tutorial from "./tutorial/tutorial";
import "../styles/index.scss";

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/tutorial" component={Tutorial} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
