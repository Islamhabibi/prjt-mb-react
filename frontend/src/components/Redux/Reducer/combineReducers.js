import { reducer_customer } from "./CustomerReducer";
import { reducer_team } from "./TeamReducer";
import { combineReducers } from 'redux';
import { reducer_categorie } from "./categorieReducers";

const rootReducer = combineReducers({
    team: reducer_team,
    customer: reducer_customer,
    categorie: reducer_categorie,
    
  });
  
  export default rootReducer;