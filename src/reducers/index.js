import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import counterReducer from "./counter";

/* 
  Combine all our reducers and export them. We only have one custom
  reducer -- counter, which we use to ADD/SUBTRACT from the current counter state.
  We also need to use the routerReducer which react-router-redux provides as a means
  to store the router information in our redux store.
*/

export default (history) => combineReducers({
  counterReducer,
  router: connectRouter(history)
})