import { combineReducers } from 'redux';
import { kittensReducer } from './kittensReducer'
import { puppiesReducer } from './puppiesReducer'
import { logInAndOutReducer } from './logIn&OutReducer'


const rootReducer = combineReducers({
  kittens: kittensReducer,
  puppies: puppiesReducer,
  logInOut: logInAndOutReducer
});

export default rootReducer;