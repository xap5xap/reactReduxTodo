import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './src/store/configureStore';
import App from './src/App';

class todoRedux extends React.Component {

  store = configureStore();


  componentDidMount() {
    console.log(this.store.getState());
    this.store.dispatch({ type: 'ADD_TODO', id: '2', text: 'xap'});
    this.store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED' });
    console.log(this.store.getState());
  }

  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('todoRedux', () => todoRedux);

export default todoRedux;
