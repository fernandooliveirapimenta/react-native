import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormLogin from './src/components/FormLogin';
import FormCadastro from './src/components/FormCadastro';
import NavigatorContainer from './src/Routes';

export default class App extends React.Component {
  render() {
    return (
        <NavigatorContainer/>
    );
  }
}

