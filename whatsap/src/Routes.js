import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

const Navigator = createStackNavigator({
  FormLogin: {
      screen: FormLogin,
       navigationOptions: () => ({ title: `Login` })
    },
  FormCadastro: {
      screen: FormCadastro,
       navigationOptions: () => ({ title: `Cadastro` })
    },

}, {
  initialRouteName: 'FormLogin'
}) ; 


const NavigatorContainer = createAppContainer(Navigator);

export default NavigatorContainer;
