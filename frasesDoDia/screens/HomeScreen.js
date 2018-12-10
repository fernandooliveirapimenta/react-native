import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const Estiloflex = {
  principal: {
    flex: 1,
    backgroundColor: 'cornflowerblue',
  },
  topo: {
    flex: 2,
    backgroundColor: 'brown',
  },
  conteudo: {
    flex: 8,
    backgroundColor: 'yellowgreen'
  },
  rodape: {
    flex: 1,
    backgroundColor: 'orangered',
  }

};

const Estilobtn = {
  principal:{
    paddingTop: 40,
    flex: 1
  },
  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4
  },
  textBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  imagem: {
    justifyContent: 'flex-end',
    padding: 5
  }
}

const Estilo = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20 
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
}
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  gerarNovaFrase = () => {
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 5);

    var frases = [];
    frases[0] = 'aa';
    frases[1] = 'bb';
    frases[2] = 'cc';
    frases[3] = 'dd';
    frases[4] = 'ee';

    var fraseEscolhida = frases[numeroAleatorio];

    Alert.alert(fraseEscolhida);
  }
  render() {
    const {principal,botao,textoBotao} = Estilo;
    return (
        <View style={principal}>
          <Image source={require('../assets/imgs/logo.png')} />
          <TouchableOpacity onPress={this.gerarNovaFrase}
          style={botao}>
            <Text style={textoBotao}>Nova Frase</Text> 
          </TouchableOpacity>
        </View>
    );
  }
}

