import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  compose(
    // Redux thunk allows async operationss
    applyMiddleware(thunk),
    // This is for Redux Extension to work
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

export default store;
