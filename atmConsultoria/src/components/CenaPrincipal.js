import React from 'react';
import { Button,TouchableHighlight,StatusBar, View, Image, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../../assets/logo.png');
const menuCliente = require('../../assets/menu_cliente.png');
const menuContato = require('../../assets/menu_contato.png');
const menuEmpresa = require('../../assets/menu_empresa.png');
const menuServico = require('../../assets/menu_servico.png');
export default class CenaPrincipal extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden backgroundColor= '#CCC' />
        <View style={styles.logo}>
            <Image source={logo}/>
        </View>
        <View style={styles.menu}>
            <View style={styles.menuGrupo}>
                <TouchableHighlight
                underlayColor={'#B9C941'}
                activeOpacity={0.3}
                 onPress={() => this.props.navigation.navigate('CenaClientes')}>
                    <Image style={styles.imgMenu} source={menuCliente}/>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('CenaContatos')}>
                    <Image style={styles.imgMenu} source={menuContato}/>
                </TouchableHighlight>
            </View>
            <View style={styles.menuGrupo}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('CenaEmpresa')}>
                    <Image style={styles.imgMenu} source={menuEmpresa}/>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('CenaServico')}>
                    <Image style={styles.imgMenu} source={menuServico}/>
                </TouchableHighlight>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    }
    
});