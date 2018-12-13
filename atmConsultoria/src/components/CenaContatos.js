import React from 'react';
import { Button,StatusBar, View, Image, StyleSheet , Text} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheContato = require('../../assets/detalhe_contato.png');
export default class CenaContatos extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden backgroundColor= '#CCC' />
            <View style={styles.cabecalho}>
                <Image source={detalheContato}/>
                <Text style={styles.txtTitulo}>Contatos</Text>
            </View>
            <View style={styles.detalheContato}>
                <Text style={styles.txtDetalhe}>42035255</Text>
                <Text style={styles.txtDetalhe}>984349435</Text>
                <Text style={styles.txtDetalhe}>4325584</Text>
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
    detalheContato: {
        marginTop:20,
        padding: 20
    },
    txtDetalhe: {
        fontSize: 18
    }

    }
    );
