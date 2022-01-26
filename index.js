import React from 'react';
import {AppRegistry} from 'react-native';
import configureStore from './app/redux/store/configureStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import App from './app/App';
import {name as appName} from './app.json';
import './app/config/ReactotronConfig';

const {store, persistor} = configureStore();
const RNRedux = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => RNRedux);
