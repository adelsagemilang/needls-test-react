/* 
  Here is a custom middleware function we use to listen to all redux actions,
  and respond appropriately should the action for the router location changing be dispatched.
  
  If the router location change action is dispatched we check to see if the pathname contains
  /add or /subtract and dispatch corresponding counter actions should either case exists.

  Finally we call next(), which is the next function in the middleware chain and return its value to be
  used further along the middleware chain!
*/

export default function routerListener({ dispatch }) {
  return next => action => {
    if (action.type === "@@router/LOCATION_CHANGE") {
      if (action.payload.location.pathname === "/increase") {
        dispatch({
          type: "COUNTER_INCREASE"
        });
      } else if (action.payload.location.pathname === "/decrease") {
        dispatch({
          type: "COUNTER_DECREASE"
        });
      }
    }
    return next(action);
  };
}
