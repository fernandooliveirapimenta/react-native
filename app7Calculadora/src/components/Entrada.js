import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Numero from './Numero';

export default Visor = props =>  {
  return (
      <View style={styles.numero}>
          <Numero num={props.num1} atualizaValor={props.atualizaValor} nome='num1'/>
          <Numero num={props.num2}  atualizaValor={props.atualizaValor} nome='num2'/>
      </View>
  );
};

const styles = StyleSheet.create({
    numero: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});