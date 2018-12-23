import React , {Component} from 'react';
import {ImageBackground, View, Button,Text, TextInput, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux';
import {modificaEmail,modificaSenha,autenticarUsuario} from '../action/AutenticacaoActions';

class Principal extends Component {
    render() {
        return(
            <View style={{marginTop: 100}} >
                <Text style={{fontSize: 25, color: '#fff'}}>principal</Text>
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
    }
)

export default connect(mapStateToProps, {modificaEmail,modificaSenha,autenticarUsuario})(Principal);
    
