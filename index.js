import React from 'react';
import {AppRegistry} from 'react-native';
import configureStore from './app/redux/store/configureStore';
import {Provider} from 'react-redux';

import App from './app/App';
import {name as appName} from './app.json';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
