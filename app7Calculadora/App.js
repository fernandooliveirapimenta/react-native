import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Topo,Resultado,Painel} from './src/components';
export default class App extends React.Component {
  render() {
    return (
      <View >
        <Topo/>
        <Resultado/>
        <Painel/>
      </View>
    );
  }
}
