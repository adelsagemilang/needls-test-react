import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';

import reducer from "./reducers/index";
import routerListener from "./middleware/router";
import { history } from './helpers/history';

//Redux Logger
const loggerMiddleware = createLogger();

/* 
  Here we apply our routerListener function into the redux middleware chain. 
  This allows us to respond and dispatch approriate COUNTER_ADD or COUNTER_SUBTRACT
  based on the pathname of the router update action.
  */

export const store = createStore(
	reducer(history), // new root reducer with router state
	compose(
		applyMiddleware(
			routerMiddleware(history), // for dispatching history actions
			routerListener,
			loggerMiddleware
		)
	)
);
