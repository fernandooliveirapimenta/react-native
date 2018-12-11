import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Topo from './src/components/Topo'
import Icone from './src/components/Icone'


export default class App extends React.Component {
 
  state = {
    escolhaUsuario: '',
    escolhaComputador: '',
    resultado: ''
  };

  jokenpo (escolha) {
    let numAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    let resultado = '';
    if(escolhaComputador === 'pedra'){
      resultado = escolha === 'pedra' ? 'Empate' 
      : escolha === 'papel' ? 'Usuario ganhou' : 'Computador ganhou';
    }
    if(escolhaComputador === 'papel'){
      resultado = escolha === 'papel' ? 'Empate' 
      : escolha === 'tesoura' ? 'Usuario ganhou' : 'Computador ganhou';
    }
    if(escolhaComputador === 'tesoura'){
      resultado = escolha === 'tesoura' ? 'Empate' 
      : escolha === 'papel' ? 'Usuario ganhou' : 'Computador ganhou';
    }
    this.setState(
      { 
        escolhaUsuario: escolha,
       escolhaComputador,
         resultado

      });
  }

  render() {
    return (
      <View style={{marginTop:20 }}>
        <Topo/>
        <View style={style.painelAcoes}>
          <View style={style.btnEscolha}>
            <Button title="pedra" onPress={() => {this.jokenpo('pedra')}}/> 
          </View> 
          <View style={style.btnEscolha}>
            <Button title="papel" onPress={() => {this.jokenpo('papel')}}/>
          </View>
          <View style={style.btnEscolha}>
            <Button title="tesoura" onPress={() => {this.jokenpo('tesoura')}}/>
          </View>
        </View>
        <View style={style.palco}>
          <Text style={style.textResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador={'Computador'} />
          <Icone escolha={this.state.escolhaUsuario} jogador={'Usuario'} />
        </View>
      </View>
    );
  }
}




const style = StyleSheet.create(
  {
    btnEscolha: {
      width: 90
    },
    painelAcoes: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10
    },
    palco: {
      alignItems: 'center',
      marginTop: 10,
    },
    textResultado: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'red',
      height: 60
    }
  }
)