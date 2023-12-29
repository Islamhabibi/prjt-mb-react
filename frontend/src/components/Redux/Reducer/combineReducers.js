import { reducer_customer } from "./CustomerReducer";
import { reducer_team } from "./TeamReducer";
import { combineReducers } from 'redux';
import { reducer_categorie, reducer_product } from "./categorieReducers";
import { ErrorReducer } from "./ErrorReducer";

const rootReducer = combineReducers({
    team: reducer_team,
    customer: reducer_customer,
    categorie: reducer_categorie,
    product: reducer_product,
    Error: ErrorReducer
    
  });
  
  export default rootReducer;