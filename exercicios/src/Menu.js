import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Simples from "./components/Simples";
import ParImpar from "./components/ParImpar";
import {Inverter, MegaSena} from "./components/Multi";
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import Contador from "./components/Contador";

const Menu = createDrawerNavigator({
    Contador: {
      screen: () => <Contador numeroInicial={100}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: { title: 'Mega Sena'}
    },

    Inverter: {
        screen: () => <Inverter texto={'React Nativo!'}/>
    },

    ParImpar: {
        screen: () => <ParImpar numero={30}/>,
        navigationOptions: {title: 'Par & Impar'}
    },

    Simples: {
        screen: () => <Simples texto={'Flexível!!!'}/>
    }
}, {drawerWidth: 300});


export default createAppContainer(Menu);