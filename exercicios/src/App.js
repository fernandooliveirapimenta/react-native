import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Simples from "./components/Simples";
import ParImpar from "./components/ParImpar";
import {Inverter, MegaSena} from "./components/Multi";
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component {

    render(){
       return (
           <View style={styles.container}>
               <Simples texto={'Flexívelsdgdssdg!!!'}/>
               <ParImpar numero={8}/>
               <Inverter texto={'React Native!'}/>
               <MegaSena numeros={9}/>
           </View>
       ) ;
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
