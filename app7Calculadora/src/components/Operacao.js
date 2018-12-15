import React from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';

export default Operacao = props =>  {
  return (
      <Picker>
          <Picker.Item label='Soma' value='soma'/>
          <Picker.Item label='Subtracao' value='subtracao'/>
      </Picker>
  );
};

const styles = StyleSheet.create({
    Operacao: {
        marginTop: 15,
        marginBottom: 15
    }
    
});