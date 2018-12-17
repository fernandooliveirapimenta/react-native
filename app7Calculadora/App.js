import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Topo,Resultado,Painel} from './src/components';
export default class App extends React.Component {
  state = {
    num1: '',
    num2: '' ,
    operacao: 'soma',
    resultado: ''
  };
   
  calcular = () => {
    let resultado = 0; 
    console.log('op');
    console.log(this.state.operacao);
    switch(this.state.operacao){
        case 'soma':
            resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
            break;
        case 'subtracao':
            resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
            break;
        default:
            resultado = 0;
    }
  
    resultado = resultado.toString();
    this.setState({resultado});
  }

  atualizaValor = (nome, numero) => {
    const obj = {};
    obj[nome] = numero;
    this.setState(obj);
  }

  atualizaOperacao = (operacao) => {
    console.log(operacao);
    this.setState({operacao});
  }
  render() {
    return (
      <View >
        <Topo/>
        <Resultado resultado={this.state.resultado} />
        <Painel {...this.state} atualizaValor={this.atualizaValor} 
        atualizaOperacao={this.atualizaOperacao} calcular={this.calcular}/>
      </View>
    );
  }
}
