import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import HomeReducer from './Home';

const reducer = combineReducers({
  form : reduxFormReducer,
  home : HomeReducer
});
const store = (window.devToolsExtension
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(reducer);

export default store;