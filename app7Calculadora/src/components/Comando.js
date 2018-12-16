import React from 'react';
import {View, Text,Button, StyleSheet} from 'react-native';

export default Comando = props =>  {
  return (
      <Button title="Calcular" onPress={props.acao}/>
  );
};

const styles = StyleSheet.create({
    visor: {
    }
});