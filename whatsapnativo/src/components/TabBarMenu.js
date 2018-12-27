import React from 'react';
import { View, Text,StatusBar,Image, TouchableHighlight} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import NavigationService from '../NavigationService';
import {connect} from 'react-redux';
import {habilitarInclusaoContato} from '../action/AppActions';
import firebase from 'react-native-firebase';


class TabBarMenu extends React.Component{

    render() {
        return (
            <View style={{backgroundColor: '#115E54', elevation: 4, marginBottom: 6}}>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <View style={{height: 50, justifyContent: 'center'}}>
                        <Text style={{color: '#fff', fontSize:20, marginLeft: 20}}>Whatsapp Clone</Text>
                    </View>
                    <View style={{flexDirection:'row',marginRight:30}}>
                        <View style={{width: 50, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableHighlight
                            underlayColor='#114D44'
                            onPress = { ()=> {NavigationService.navigate('AdicionarContato');
                            this.props.habilitarInclusaoContato()}}>
                                <Image source={require('../../assets/adicionar-contato.png')}/>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight onPress={() => 
                        firebase
                        .auth().signOut()
                        .then(() => NavigationService.navigate('FormLogin'))}>
                            <View style= {{justifyContent: 'center'}} >
                                <Text style={{fontSize: 20, color: '#fff'}}>Sair</Text>
                            </View>
                        </TouchableHighlight>
                        
                    </View>
                 </View>
                <TabBar {...this.props} 
                 style={{backgroundColor: '#115E54', elevation: 0}} />
                 
            </View>
        ); 
    }
}

mapStateToProps = state => (
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
        cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
    }
)
export default connect(null, {habilitarInclusaoContato})(TabBarMenu); 