import {GET_RECIPES} from '../actions/index.js';

export default function(state = [], action){
    switch (action.type){
        case GET_RECIPES: 
            return action.payload;
    }
        
        return state
    }




