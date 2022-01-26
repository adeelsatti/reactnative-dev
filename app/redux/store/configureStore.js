import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import {userReducer} from '../reducers/LoginRedux';
import {persistReducer, persistStore} from 'redux-persist';
import reactotron from '../../config/ReactotronConfig';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({users: userReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(thunk), reactotron.createEnhancer()),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};

export default configureStore;
