import {createStore} from 'redux';
import reducer from './reducer';

// now that we have a reducer, we can create a store based on it
const store = createStore(reducer) // this will return a store object

export default store;
