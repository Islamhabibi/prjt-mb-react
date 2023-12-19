import { reducer_customer } from "./CustomerReducer";
import { reducer_team } from "./TeamReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    team: reducer_team,
    customer: reducer_customer,
    
  });
  
  export default rootReducer;