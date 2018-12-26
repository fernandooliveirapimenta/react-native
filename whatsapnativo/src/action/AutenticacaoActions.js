import firebase from 'react-native-firebase';
import b64 from 'base-64';
import NavigationService from '../NavigationService';
import './types';
import { MODIFICA_EMAIL, MODIFICA_SENHA, MODIFICA_NOME, CADASTRO_USUARIO_SUCESSO, CADASTRO_USUARIO_ERRO, LOGIN_USUARIO_SUCESSO, LOGIN_USUARIO_ERRO, LOGIN_EM_ANDAMENTO, CADASTRO_EM_ANDAMENTO } from './types';

export const modificaEmail = (texto) => {
    return (
        {
            type: MODIFICA_EMAIL,
            payload: texto
        }
    )
}

export const modificaSenha = (texto) => {
    return(
        {
            type: MODIFICA_SENHA,
            payload: texto
        }
    )
}

export const modificaNome = (texto) => {
    return(
        {
            type: MODIFICA_NOME,
            payload: texto
        }
    )
}

export const cadastrarUsuario = ({nome, email, senha}) => {
    return dispatch => {

        dispatch({ type: CADASTRO_EM_ANDAMENTO });

        firebase
        .auth()
        .createUserWithEmailAndPassword(email,senha)
        .then(user => {
            let emailB64 = b64.encode(email);
            firebase.database().ref(`/contatos/${emailB64}`)
            .push({nome})
            .then(value => cadastrarUsuarioSucesso(dispatch))
        })
        .catch(err => cadastrarUsuarioErro(err, dispatch));
    }

}

const cadastrarUsuarioSucesso = (dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_SUCESSO }); 
    NavigationService.navigate('BoasVindas', {});

}

const cadastrarUsuarioErro = (erro,dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_ERRO, payload: erro.message }); 
}

export const autenticarUsuario = ({email,senha,navigation}) => {
    return dispatch => {

        dispatch({ type: LOGIN_EM_ANDAMENTO });

        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(value => loginUsuarioSucesso(dispatch,navigation))
        .catch(erro => loginUsuarioErro(erro,dispatch));
    }
}

const loginUsuarioSucesso = (dispatch,navigation) => {
    dispatch(
        {
            type: LOGIN_USUARIO_SUCESSO,
        }
    )
    console.log(navigation);
    
    NavigationService.navigate('Principal', {});
    // navigation.navigate('Principal');
}

const loginUsuarioErro = (erro,dispatch) => {
    dispatch(
        {
            type: LOGIN_USUARIO_ERRO,
            payload: erro.message
        }
    )
}