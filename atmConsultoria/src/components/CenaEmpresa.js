import React from 'react';
import { Button,StatusBar, View, Image, StyleSheet , Text} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const foto = require('../../assets/detalhe_empresa.png');
export default class CenaEmpresa extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden backgroundColor= '#CCC' />
            <View style={styles.cabecalho}>
                <Image source={foto}/>
                <Text style={styles.txtTitulo}>A Empresa</Text>
            </View>
            <View style={styles.detalhe}>
                <Text style={styles.txtDetalhe}>A Atm consultoria esta ha mais de 20 anos no mercado</Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#EC7148' ,
        marginLeft: 10,
        marginTop: 25
    },
    detalhe: {
        marginTop:20,
        padding: 20
    },
    txtDetalhe: {
        fontSize: 18
    }

    }
    );
