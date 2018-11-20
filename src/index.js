import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import CounterContainers from "./containers/counter";
import { store } from "./store";

/* 
  Pretty straightforward, we want to wrap our entire application
  in the redux <Provider> container which gives us access to the store
  across our entire application. We also define our routes here as well,
  normally we would create a seperate component to isolate all our
  routing definitions to a single point of access and concern. But we only have
  three definitions so its not a big deal to leave them here. 

  Every route points to the Counter container. This is because the Counter container is
  the only page of our application, and it gets the counter value from redux and uses a presentation
  component (CounterDisplay) to display that value.
*/

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={CounterContainers} />
        <Route exact path="/increase" component={CounterContainers} />
        <Route exact path="/decrease" component={CounterContainers} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
