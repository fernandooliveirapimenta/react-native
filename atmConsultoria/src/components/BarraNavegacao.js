import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BarraNavegacao extends React.Component {
  render() {
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60,
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'

    }

});