import React from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';

export default class Operacao extends React.Component  {

    render() {

        return (
            <Picker 
            style={styles.operacao}
            selectedValue={this.props.operacao}
            onValueChange={operacao => this.props.atualizaOperacao(operacao)}>
                <Picker.Item label='Soma' value='soma'/>
                <Picker.Item label='Subtracao' value='subtracao'/>
            </Picker>
        );
    }
};

const styles = StyleSheet.create({
    operacao: {
        marginTop: 15,
        marginBottom: 15
    }
    
});