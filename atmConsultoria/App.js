import React from 'react';
import { StatusBar,StyleSheet, Text, View } from 'react-native';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <CenaClientes/>
      </View>
    );
  }
}

