import React from 'react';
import {Image,ImageBackground, View,  Button, Text} from 'react-native';

export default class BoasVindas extends React.Component{

    render() {
        return (
            <ImageBackground style={{flex: 1, width: null}} source={require('../../assets/bg.png')}>
                <View style={{flex: 1, padding: 15}}>
                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                         <Text style={{fontSize: 20, color: '#ffff'}}>Seja Bem Vindo</Text>
                         <Image source={require('../../assets/logo.png')} />
                    </View>
                    <View style={{flex: 1}}>
                        <Button title='Fazer Login'  onPress={() => this.props.navigation.navigate('FormLogin')}/>
                    </View>
                </View> 
            </ImageBackground>
        ); 
    }
}
