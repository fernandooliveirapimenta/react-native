import React from 'react';
import {Image,ImageBackground,TextInput, View,  Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {modificaAdicionaContatoEmail,adicionaContato} from '../action/AppActions';

class AdicionarContato extends React.Component{

    renderAdicionaContado() {
            if(!this.props.cadastro_resultado_inclusao){
                return(
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center'}}> 
                            <TextInput placeholder='E-mail'
                                style={{fontSize: 20, height: 45,
                                borderBottomColor: '#115E54',
                                borderBottomWidth: 2}}
                                value={this.props.adiciona_contato_email}
                                onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
                            />
                        </View>
                        <View style={{flex: 1}}> 
                            <Button title='Adicionar' 
                            color='#115E54' 
                            onPress={() => 
                            this.props.adicionaContato(this.props.adiciona_contato_email)}/>
                            <Text style={{color: '#ff0000', fontSize: 20}}>
                                {this.props.cadastro_resultado_txt_erro}

                            </Text>
                        </View>
                    </View>

                );
            } else {
                return(
                    <View>
                        <Text style={{fontSize:20}}>
                        Cadastro realizado com sucesso!
                        </Text>
                    </View>
                );
            }
    }

    render() {
        return (
        <View style={{flex: 1, justifyContent: 'center', padding: 20}}> 
            {this.renderAdicionaContado()}
        </View>
            
        ); 
    }
}

const mapStateToProps = state => (
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
        cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
    }
)
export default connect(mapStateToProps, {modificaAdicionaContatoEmail,adicionaContato})(AdicionarContato);