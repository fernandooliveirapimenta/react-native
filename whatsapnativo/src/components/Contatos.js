import React from 'react';
import { View , Text, FlatList,TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {contatosUsuarioFetch} from '../action/AppActions';
import _ from 'lodash';
import NavigationService from '../NavigationService';

class Contatos extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            fonteDeDados: this.props.contatos 
        }
    }

    componentWillMount(){
        this.props.contatosUsuarioFetch();
    }

    componentWillReceiveProps(nextProps){
        this.setState({fonteDeDados: nextProps.contatos});
    }

    _keyExtractor = (item, index) => `${item.uid}`;

    _renderItem = ({item}) => (
        <TouchableHighlight
         onPress={() => NavigationService.navigate('Conversa',{email: item.email,
          nome: item.nome,
           title: item.nome})}>
            <View style={{flex: 1, borderBottomWidth: 1, borderColor: '#CCC' }}>
                <Text style={{fontSize: 25}}>{item.nome}</Text>
                <Text style={{fontSize: 18}}>{item.email}</Text>
            </View>
        </TouchableHighlight>
        
      );

    render() {
        return (
              <FlatList
        data={this.state.fonteDeDados}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
            
        ); 
    }
}

const mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return {...val, uid}
    });

    return { contatos };
} 

export default connect(mapStateToProps, {contatosUsuarioFetch})(Contatos);