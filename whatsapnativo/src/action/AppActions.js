import firebase from 'react-native-firebase';
import b64 from 'base-64';
import NavigationService from '../NavigationService';
import {MODIFICA_ADICIONA_CONTATO_EMAIL} from './types';

export const modificaAdicionaContatoEmail = (texto) => {
    
    return (
        {
            type: MODIFICA_ADICIONA_CONTATO_EMAIL,
            payload: texto
        }
    )
}

export const adicionaContato = email => {
    let emailB64 = b64.encode(email);
    console.log(emailB64);
    firebase.database()
    .ref(`/contatos/${emailB64}`)
    .once('value')
    .then(snapshot => {
        if(snapshot.val()){
            console.log(snapshot);
        }
    })
    .catch(err => console.log(err))

    return (
        {
            type: '',
            payload: ''
        }
    )
}
