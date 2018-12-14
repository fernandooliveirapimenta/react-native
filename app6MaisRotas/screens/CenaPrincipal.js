import React, {Component} from 'react';
import {View,Text,Image, StyleSheet,TouchableHighlight} from 'react-native';

const logo = require('../assets/logo.png');
const btnJogar = require('../assets/botao_jogar.png');
const btnSobreJogo = require('../assets/sobre_jogo.png');
const btnOtrosJogos = require('../assets/outros_jogos.png');

export default class CenaPrincipal extends Component{
    static navigationOptions = {
        header: null,
      };
    render(){
        return(
            <View style={styles.cenaPrincipal}>
                <View style={styles.apresentacaoJogo}>
                    <Image source={logo}/>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Resultado')} >
                    <Image source={btnJogar}/>
                </TouchableHighlight>
                </View>
                <View style={styles.rodape}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('SobreJogo')} >
                    <Image source={btnSobreJogo}/>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('OutrosJogos')} >
                    <Image source={btnOtrosJogos}/>
                </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cenaPrincipal:{
        flex: 1,
        backgroundColor: '#61BD8C'
    },
    apresentacaoJogo:{
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rodape:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});