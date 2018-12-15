import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default Visor = props =>  {
  return (
      <View>
        <TextInput style={styles.visor} placeholder='Resultado'
        editable={true}/>
      </View>
  );
};

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#47315a'
    }
});