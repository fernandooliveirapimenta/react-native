import React , {Component} from 'react';
import {ImageBackground, View, Button,Text, TextInput, TouchableHighlight , ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {modificaEmail,modificaSenha,autenticarUsuario} from '../action/AutenticacaoActions';

class FormLogin extends Component {
    renderBtnAcessar = () => {
        if(this.props.loading_login){
            return(<ActivityIndicator size='large' color='#fff'/>)
        }
        return(

            <Button title='Acessar' color='#115E54'
                onPress={() => this.props.autenticarUsuario({email,senha,navigation} = this.props)}/>
        );
    }

    render() {
        return(
            <ImageBackground style={{flex:1, width: null}} source={require('../../assets/bg.png')}>
                <View style={{flex: 1, padding: 10}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                        <Text style={{fontSize: 25, color: '#fff'}}>WhatsApp Clone</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput value={this.props.email}
                        style={{fontSize: 20, height: 45}}
                        placeholder='E-mail'
                        placeholderTextColor='#fff'
                        onChangeText={texto => this.props.modificaEmail(texto)}></TextInput>
                        <TextInput secureTextEntry value={this.props.senha} 
                        style={{fontSize: 20, height: 45}} 
                        placeholder='Senha'
                        placeholderTextColor='#fff'
                        onChangeText={texto => this.props.modificaSenha(texto)}></TextInput>
                        <Text style={{fontSize: 18, color:'#ff0000'}}>{this.props.erroLogin}</Text>
                        <TouchableHighlight onPress={()=> this.props.navigation.navigate('FormCadastro')}>
                            <Text style={{fontSize: 20, color:'#fff'}}>Ainda nao tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex: 2}}>
                        { this.renderBtnAcessar()}
                    </View>
                </View>
            </ImageBackground>
            
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login,
    }
)

export default connect(mapStateToProps, {modificaEmail,modificaSenha,autenticarUsuario})(FormLogin);
    