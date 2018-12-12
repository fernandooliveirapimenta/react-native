import React from 'react';
import { Text, View } from 'react-native';
import ListaItens from './src/components/ListaItens';

export default class App extends React.Component {
  render() {
    return (
      <View >
        <ListaItens/>
      </View>
    );
  }
}
