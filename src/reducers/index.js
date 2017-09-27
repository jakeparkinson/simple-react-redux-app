import { combineReducers } from 'redux';
import contacts from './contacts.js';

const skipioApp = combineReducers({
  contacts
});

export default skipioApp;