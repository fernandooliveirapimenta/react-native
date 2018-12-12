import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import Itens from './Itens';
import axios from 'axios';

export default class ListaItens extends React.Component{
    constructor(props){
        super(props);
        this.state = {listaItens: []};
    }

    componentWillMount(){
        console.log('Fazer alguma coisa antes de renderizar')
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
        .then( response => {
            this.setState({listaItens: response.data});
        })
        .catch(()=> {console.log('erro');});
    }

    componentDidMount(){
        console.log('Fazer alguma coisa depois de renderizar')

    }
    render() {
        console.log('renderizado oo');
        return(
            <ScrollView style={{backgroundColor: '#DDD'}}> 
                {this.state.listaItens.map( item => 
                     <Itens key={item.titulo} item={item}/>
                )}
            </ScrollView>
        );
    }
}