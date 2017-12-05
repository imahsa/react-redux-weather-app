import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //WE want to add on cities in an Array
      //We should NOT Manipulate our state
      //We sould Return a new instance of our state with OLD and NEW data
      //return state.concat([action.payload.data]);
      //ES6 Syntax:
      return [action.payload.data, ...state];
  }

  return state;
}
