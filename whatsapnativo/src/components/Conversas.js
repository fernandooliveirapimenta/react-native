import React from 'react';
import { View, Text, FlatList,TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {conversasUsuarioFetch} from '../action/AppActions';
import _ from 'lodash';
import NavigationService from '../NavigationService';

class Conversas extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            conversas: this.props.conversas
        }
    }
    componentWillMount() {
        this.props.conversasUsuarioFetch()
    }

    componentWillReceiveProps(nextProps){
        this.setState({conversas: nextProps.conversas});
    }

    _keyExtractor = (item, index) => `${item.uid}`;

    _renderItem = ({item}) => {
            return(
                <TouchableHighlight onPress={() => NavigationService.navigate('Conversa',{email: item.email, nome: item.nome, title: item.nome})}>
                    <View style={{flex:1, padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
                        <Text style={{fontSize: 25}}>{item.nome}</Text>
                    </View>
                </TouchableHighlight>
               
            );
    }

    render() {
        return (
            <FlatList
            data={this.state.conversas}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            /> 
            
        ); 
    }
}
const mapStateToProps = state => {
    const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
        return {...val, uid};
    })

    return({
        conversas
    })
}

export default connect(mapStateToProps, {conversasUsuarioFetch})(Conversas);