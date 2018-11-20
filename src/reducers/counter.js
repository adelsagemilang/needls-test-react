/* 
  Here is our counter reducer. The state of this slice of the store
  is represented with an object that contains a single field 'value' which
  represents the value of the counter. We've opted to contain this value within an object
  as future changes may require us to incorporate multiple fields in the state. So we are in good
  shape and should not need to refactor anything should such a request come up!
*/
function counterReducer(
  state = {
    value: 0
  },
  action
) {
  switch (action.type) {
    case "COUNTER_INCREASE": {
      return {
        ...state,
        value: state.value + 1
      };
    }
    case "COUNTER_DECREASE": {
      return {
        ...state,
        value: state.value - 1
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}

export default counterReducer;
