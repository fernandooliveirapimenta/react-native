import { LISTA_CONVERSAS } from '../action/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {

   switch(action.type) {

        case LISTA_CONVERSAS:
            return action.payload;

        default: 
        return state;
   }
}