import {GET_INGREDIENTS} from '../actions';

export default function(state=[], action){
    switch (action.type){
        case GET_INGREDIENTS: 
            return action.payload;
    }
        
        return state
    }
