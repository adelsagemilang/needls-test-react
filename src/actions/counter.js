/*
  Here our all the functions used to create actions for our counter. 

  We could extend these to include a specific value

  We SHOULD create a constant file that stores the raw string value
  for each of the type fields. That way we can use these constant values
  across our application (in the reducer for example) without having to worry
  about spelling errors!
*/

export function counterIncrease() {
  return {
    type: "COUNTER_INCREASE"
  };
}

export function counterDecrease() {
  return {
    type: "COUNTER_DECREASE"
  };
}
