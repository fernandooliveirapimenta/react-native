import React , {Component} from 'react';
import {ImageBackground, View, Button,Text, TextInput, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux';
import {modificaEmail,modificaSenha} from '../action/AutenticacaoActions';

class FormLogin extends Component {
    render() {
        return(
            <ImageBackground style={{flex:1, width: null}} source={require('../../assets/bg.png')}>
                <View style={{flex: 1, padding: 10}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                        <Text style={{fontSize: 25}}>WhatsApp Clone</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput value={this.props.email}
                        style={{fontSize: 20, height: 45}}
                        placeholder='E-mail'
                        onChangeText={texto => this.props.modificaEmail(texto)}></TextInput>
                        <TextInput secureTextEntry value={this.props.senha} 
                        style={{fontSize: 20, height: 45}} 
                        placeholder='Senha'
                        onChangeText={texto => this.props.modificaSenha(texto)}></TextInput>
                        <TouchableHighlight onPress={()=> this.props.navigation.navigate('FormCadastro')}>
                            <Text style={{fontSize: 20}}>AAinda nao tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex: 2}}>
                        <Button title='Acessar' color='#115E54' onPress={() => false}/>
                    </View>
                </View>
            </ImageBackground>
            
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, {modificaEmail,modificaSenha})(FormLogin);
    
