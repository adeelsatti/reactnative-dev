import {combineReducers, createStore} from 'redux';

import {userReducer} from '../reducers/LoginRedux';

const rootReducer = combineReducers({users: userReducer});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
