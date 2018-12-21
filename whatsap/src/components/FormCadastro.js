import React from 'react';
import {ImageBackground, View, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {modificaEmail,modificaSenha,modificaNome} from '../action/AutenticacaoActions';
class FormCadastro extends React.Component{
    render() {
        return (
            <ImageBackground style={{flex: 1, width: null}} source={require('../../assets/bg.png')}>
                <View style={{flex: 1, padding: 10}}>
                    <View style={{flex: 4, justifyContent: 'center'}}>
                        <TextInput value={this.props.nome} placeholder='Nome' style={{fontSize: 20, height: 45}} onChangeText={texto => this.props.modificaNome(texto)}/>  
                        <TextInput value={this.props.email} placeholder='E-mail' style={{fontSize: 20, height: 45}} onChangeText={texto => this.props.modificaEmail(texto)}/>
                        <TextInput secureTextEntry value={this.props.senha} placeholder='Senha' style={{fontSize: 20, height: 45}} onChangeText={texto => this.props.modificaSenha(texto)}/> 
                    </View>
                    <View style={{flex: 1}}>
                        <Button title='Cadastrar' color='#115E54' onPress={() => false}/>
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
    }
);

export default connect(mapStateToProps, {modificaNome, modificaEmail, modificaSenha})(FormCadastro);