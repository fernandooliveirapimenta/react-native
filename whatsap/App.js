import React from 'react';
import NavigatorContainer from './src/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';


export default class App extends React.Component {

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyBsyTgOJY5kE39OqHtI2pEFhwoZyT2dp9k",
      authDomain: "whatsapp-clone-40903.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-40903.firebaseio.com",
      projectId: "whatsapp-clone-40903",
      storageBucket: "whatsapp-clone-40903.appspot.com",
      messagingSenderId: "778884342459"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <NavigatorContainer/>
      </Provider>
    );
  }
}

