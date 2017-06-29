import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './src/store/configureStore';
import App from './src/App';

class todoRedux extends React.Component {

  store = configureStore();

  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('todoRedux', () => todoRedux);

export default todoRedux;
