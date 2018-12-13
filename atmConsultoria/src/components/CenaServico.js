import React from 'react';
import { Button,StatusBar, View, Image, StyleSheet , Text} from 'react-native';

const foto = require('../../assets/detalhe_servico.png');
export default class CenaServico extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden backgroundColor= '#CCC' />
            <View style={styles.cabecalho}>
                <Image source={foto}/>
                <Text style={styles.txtTitulo}>Nossos servicos</Text>
            </View>
            <View style={styles.detalhe}>
                <Text style={styles.txtDetalhe}>Consultoria</Text>
                <Text style={styles.txtDetalhe}>Processos</Text>
                <Text style={styles.txtDetalhe}>Acompanhamento de Projetos</Text>
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
        color: '#19D1C8' ,
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
