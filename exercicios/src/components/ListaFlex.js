import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';

const fonte = {style: { fontSize: 30}};


const alunos = [
    {id: 1, nome: 'Rafael', nota: 7.9},
    {id: 2, nome: 'Rafael', nota: 7.9},
    {id: 3, nome: 'Rafael', nota: 7.9},
    {id: 4, nome: 'Rafael', nota: 7.9},
    {id: 5, nome: 'Rafael', nota: 7.9},
    {id: 6, nome: 'Rafael', nota: 7.9},
    {id: 7, nome: 'Rafael', nota: 7.9},
    {id: 8, nome: 'Rafael', nota: 7.9},
    {id: 9, nome: 'Rafael', nota: 7.9},
    {id: 10, nome: 'Rafael', nota: 7.9},
    {id: 11, nome: 'Rafael', nota: 7.9},
    {id: 12, nome: 'Rafael', nota: 7.9},
    {id: 13, nome: 'Rafael', nota: 7.9},
    {id: 14, nome: 'Rafael', nota: 7.9},
    {id: 15, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 16, nome: 'Rafael', nota: 7.9},
    {id: 17, nome: 'Rafael', nota: 7.9},
    {id: 18, nome: 'Rafael', nota: 7.9},
    {id: 19, nome: 'Rafael', nota: 7.9},
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
};

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>;


export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item}/>
    };

    return(
        <ScrollView>
           <FlatList data={alunos} renderItem={renderItem} keyExtractor={(x, index) => index.toString()}  />
        </ScrollView>
    )
};