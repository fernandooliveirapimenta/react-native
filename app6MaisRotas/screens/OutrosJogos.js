import React, {Component} from 'react';
import {Text} from 'react-native';

export default class OutrosJogos extends Component{
    static navigationOptions = {
        title: 'Outros Jogos',
      };
    render(){
        return(
            <Text style={{flex:1, backgroundColor: '#61BD8C'}}>
            Outros Jogos</Text>
        );
    }
}