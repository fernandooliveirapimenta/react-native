import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default Numero = props =>  {
  return (
          <TextInput style={styles.numero}/>
  );
};

const styles = StyleSheet.create({
    numero: {
        padding: 10,
        width: 140,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#47315a'
    }
});