import firebase from 'firebase';

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
        .then(user => cadastrarUsuarioSucesso(dispatch))
        .catch(err => cadastrarUsuarioErro(err, dispatch));
    }

}

const cadastrarUsuarioSucesso = (dispatch) => {
    dispatch({ type: 'sucesso' }); 
}

const cadastrarUsuarioErro = (erro,dispatch) => {
    dispatch({ type: 'cadastro_usuario_erro', payload: erro.message }); 
}