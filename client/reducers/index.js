import { combineReducers } from 'redux';
import { kittensReducer } from './kittensReducer'
import { puppiesReducer } from './puppiesReducer'


const rootReducer = combineReducers({
  kittens: kittensReducer,
  puppies: puppiesReducer
});

export default rootReducer;