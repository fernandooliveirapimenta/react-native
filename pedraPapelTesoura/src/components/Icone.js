import React from 'react';
import {View, Image,Text,StyleSheet} from 'react-native';

const imagem = require('../../assets/papel.png');

export default class Icone extends React.Component {
    render(){
        if(this.props.escolha == '') return false;
  
      return(
            <View style={style.txtJogador}>
              <Text>{this.props.jogador}</Text>
              <Image source={imagem}/>
            </View>
      );
    }
  }

  const style = StyleSheet.create(
    {
      txtJogador: {
        alignItems: 'center'
      }
    }
  )