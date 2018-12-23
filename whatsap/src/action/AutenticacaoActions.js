import firebase from 'firebase';
import b64 from 'base-64';
import NavigationService from '../NavigationService';


export const modificaEmail = (texto) => {
    return (
        {
            type: 'modifica_email',
            payload: texto
        }
    )
}

export const modificaSenha = (texto) => {
    return(
        {
            type: 'modifica_senha',
            payload: texto
        }
    )
}

export const modificaNome = (texto) => {
    return(
        {
            type: 'modifica_nome',
            payload: texto
        }
    )
}

export const cadastrarUsuario = ({nome, email, senha}) => {
    return dispatch => {
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
    dispatch({ type: 'cadastro_usuario_sucesso' }); 
    NavigationService.navigate('BoasVindas', {});

}

const cadastrarUsuarioErro = (erro,dispatch) => {
    dispatch({ type: 'cadastro_usuario_erro', payload: erro.message }); 
}

export const autenticarUsuario = ({email,senha}) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(value => loginUsuarioSucesso(dispatch))
        .catch(erro => loginUsuarioErro(erro,dispatch));
    }
}

const loginUsuarioSucesso = (dispatch) => {
    dispatch(
        {
            type: 'login_usuario_sucesso',
        }
    )
    NavigationService.navigate('Principal', {});
}

const loginUsuarioErro = (erro,dispatch) => {
    dispatch(
        {
            type: 'login_usuario_erro',
            payload: erro.message
        }
    )
}