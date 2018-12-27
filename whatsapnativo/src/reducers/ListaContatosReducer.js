import { LISTA_CONTATO_USUARIO } from '../action/types';

const INITIAL_STATE = {
    adiciona_contato_email: '',
};

export default (state = INITIAL_STATE, action) => {

   switch(action.type) {
        case LISTA_CONTATO_USUARIO:
            return action.payload;

        default: 
        return state;
   }
}