import React , {Component} from 'react';
import {ImageBackground, View, Dimensions,Button,Text,Animated, 
    TextInput, TouchableHighlight , StyleSheet,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {modificaEmail,modificaSenha,autenticarUsuario} from '../action/AutenticacaoActions';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';
class Principal extends Component {
    state = {
        index: 0,
        routes: [
          { key: 'first', title: 'Conversas' },
          { key: 'second', title: 'Contatos' },
        ],
      };
      _renderTabBar = props => {
        return (
            <TabBarMenu {...props} />
        );
      };
    
    render() {
        return(
            <TabView
            navigationState={this.state}
        renderScene={SceneMap({
          first: Conversas,
          second: Contatos,
        })}
        tabBarPosition='top'
    
        renderTabBar = {this._renderTabBar}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
      />
            
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
    }
)
const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });
export default connect(mapStateToProps, {modificaEmail,modificaSenha,autenticarUsuario})(Principal);
    
