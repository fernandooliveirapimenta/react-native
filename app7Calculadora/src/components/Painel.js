import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component  {
    render() {
        return (
            <View> 
                <Entrada num1={this.props.num1} num2={this.props.num2} atualizaValor={this.props.atualizaValor}/>
                <Operacao operacao={this.props.operacao} atualizaOperacao={this.props.atualizaOperacao}/>
                <Comando acao={this.props.calcular}/>
            </View>
        );
    }
};

export {Painel};