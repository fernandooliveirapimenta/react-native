import React from 'react';
import { StatusBar,StyleSheet, Text, View } from 'react-native';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServico from './src/components/CenaServico';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

const Navigator = createStackNavigator({
  CenaPrincipal: {screen: CenaPrincipal},
  CenaClientes: {screen: CenaClientes},
  CenaContatos: {screen: CenaContatos},
  CenaEmpresa: {screen: CenaEmpresa},
  CenaServico: {screen: CenaServico},
}, {
  initialRouteName: 'CenaPrincipal'
}) ; 

const AppContainer = createAppContainer(Navigator);


export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

