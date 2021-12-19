import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import HomeReducer from './Home';

const reducer = combineReducers({
  form : reduxFormReducer,
  home : HomeReducer
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;