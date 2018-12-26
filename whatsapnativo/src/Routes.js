import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';

const Navigator = createStackNavigator({
  FormLogin: {
      screen: FormLogin,
       navigationOptions: () => ({header: null})
    },
  FormCadastro: {
      screen: FormCadastro,
       navigationOptions: () => ({ title: `Cadastro` })
    },
  BoasVindas: {
      screen: BoasVindas,
       navigationOptions: () => ({ header: null })
    },
  Principal: {
      screen: Principal,
       navigationOptions: () => ({ header: null })
    },
  AdicionarContato: {
      screen: AdicionarContato,
       navigationOptions: () => ({ title: 'Adicionar Contato' })
    },
}, {
  initialRouteName: 'FormLogin',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#115E54',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      justifyContent: 'flex-end'
    },
  },
}) ; 


const NavigatorContainer = createAppContainer(Navigator);

export default NavigatorContainer;
