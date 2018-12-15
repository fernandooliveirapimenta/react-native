import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Numero from './Numero';

export default Visor = props =>  {
  return (
      <View style={styles.numero}>
          <Numero/>
          <Numero/>
      </View>
  );
};

const styles = StyleSheet.create({
    numero: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});