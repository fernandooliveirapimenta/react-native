import React from 'react';
import {ImageBackground, View, TextInput, Button, Text,ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {modificaEmail,modificaSenha,modificaNome,
cadastrarUsuario} from '../action/AutenticacaoActions';

class FormCadastro extends React.Component{

    renderBtnCadastro = () => {
            if(this.props.loading_cadastro){
                return(<ActivityIndicator size='large'/>)
            }
        return(
            <Button title='Cadastrar' color='#115E54' 
            onPress={() => this.props.cadastrarUsuario({nome,email,senha} =this.props)}/>
        )
    }

    render() {
        return (
            <ImageBackground style={{flex: 1, width: null}} source={require('../../assets/bg.png')}>
                <View style={{flex: 1, padding: 10}}>
                    <View style={{flex: 4, justifyContent: 'center'}}>
                        <TextInput 
                        placeholderTextColor='#fff'
                        value={this.props.nome} placeholder='Nome' style={{fontSize: 20, height: 45}} onChangeText={texto => this.props.modificaNome(texto)}/>  
                        <TextInput
                        placeholderTextColor='#fff'
                         value={this.props.email} placeholder='E-mail' style={{fontSize: 20, height: 45}} onChangeText={texto => this.props.modificaEmail(texto)}/>
                        <TextInput
                        placeholderTextColor='#fff'
                         secureTextEntry value={this.props.senha} placeholder='Senha' style={{fontSize: 20, height: 45}} onChangeText={texto => this.props.modificaSenha(texto)}/> 
                         <Text style={{color: '#ff0000'}}>{this.props.erroCadastro}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        {this.renderBtnCadastro()}
                    </View>
                </View>
            </ImageBackground>
            
        ); 
    }
}

const mapStateToProps = state =>  (
    {
        nome:state.AutenticacaoReducer.nome,
        email:state.AutenticacaoReducer.email,
        senha:state.AutenticacaoReducer.senha,
        erroCadastro:state.AutenticacaoReducer.erroCadastro,
        loading_cadastro:state.AutenticacaoReducer.loading_cadastro,
    }
);

export default connect(mapStateToProps, {modificaNome, modificaEmail, modificaSenha,cadastrarUsuario})(FormCadastro);