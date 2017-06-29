import React from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App';

class todoRedux extends React.Component {

  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('todoRedux', () => todoRedux);

export default todoRedux;
