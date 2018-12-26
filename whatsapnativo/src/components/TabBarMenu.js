import React from 'react';
import { View, Text,StatusBar,Image, TouchableHighlight} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import NavigationService from '../NavigationService';

export default class TabBarMenu extends React.Component{

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
                         onPress = { ()=> NavigationService.navigate('AdicionarContato')}>
                            <Image source={require('../../assets/adicionar-contato.png')}/>
                        </TouchableHighlight>
                        </View>
                        <View style= {{justifyContent: 'center'}} >
                            <Text style={{fontSize: 20, color: '#fff'}}>Sair</Text>
                        </View>
                    </View>
                 </View>
                <TabBar {...this.props} 
                 style={{backgroundColor: '#115E54', elevation: 0}} />
                 
            </View>
        ); 
    }
}
