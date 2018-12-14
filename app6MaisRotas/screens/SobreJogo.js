import React, {Component} from 'react';
import {Text} from 'react-native';

export default class SobreJogo extends Component{
    static navigationOptions = {
        title: 'Sobre o Jogo',
      };
    render(){
        return(
            <Text style={{flex:1, backgroundColor: '#61BD8C'}}>
                infos sobre o jogo
            </Text>
        );
    }
}