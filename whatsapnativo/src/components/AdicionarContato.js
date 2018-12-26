import React from 'react';
import {Image,ImageBackground,TextInput, View,  Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {modificaAdicionaContatoEmail,adicionaContato} from '../action/AppActions';

class AdicionarContato extends React.Component{

    render() {
        return (
        <View style={{flex: 1, justifyContent: 'center', padding: 20}}> 

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
            </View>
        </View>
            
        ); 
    }
}

const mapStateToProps = state => (
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    }
)
export default connect(mapStateToProps, {modificaAdicionaContatoEmail,adicionaContato})(AdicionarContato);