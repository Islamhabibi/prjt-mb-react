import { createStore, applyMiddleware, compose } from 'redux';
import {thunk }from 'redux-thunk'
import { reducer_team } from './Reducer/TeamReducer';
 const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
 const store = createStore(reducer_team, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

  export default store