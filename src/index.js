import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import indexRoutes from "./routes/index";
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <HashRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route to={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </HashRouter>, document.getElementById('root'));


serviceWorker.register();
