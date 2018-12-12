import React from 'react';
import { StatusBar, View, Image, StyleSheet , Text} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../../assets/detalhe_cliente.png');
const cliente1 = require('../../assets/cliente1.png');
const cliente2 = require('../../assets/cliente2.png');
export default class CenaClientes extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden backgroundColor= '#CCC' />
        <BarraNavegacao/>
            <View style={styles.cabecalho}>
                <Image source={detalheCliente}/>
                <Text style={styles.txtTitulo}>Nossos Clientes</Text>
            </View>
            <View style={styles.detalheCliente}>
                <Image source={cliente1}/>
                <Text style={styles.txtDetalheCliente}>Novo cliente</Text>
            </View>
            <View style={styles.detalheCliente}>
                <Image source={cliente2}/>
                <Text style={styles.txtDetalheCliente}>Nossos Clientes</Text>
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
        color: '#89C941' ,
        marginLeft: 10,
        marginTop: 25
    },
    detalheCliente: {
        padding: 20,
        marginTop: 10

    },
    txtDetalheCliente: {
        fontSize: 18,
        marginLeft: 20
    }
});