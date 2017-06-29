import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import App from './src/App';

class todoRedux extends React.Component {

  store = configureStore();


  // componentDidMount() {
  //   this.store.dispatch({ type: 'ADD_TODO', id: '2', text: 'xap' });
  //   this.store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED' });
  //   console.log('index didmlunt', this.store.getState());
  // }

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('todoRedux', () => todoRedux);

export default todoRedux;
