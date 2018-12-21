import React from 'react';
import NavigatorContainer from './src/Routes';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <NavigatorContainer/>
      </Provider>
    );
  }
}

