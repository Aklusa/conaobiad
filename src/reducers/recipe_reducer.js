import {FETCH_RECIPE} from '../actions/index.js';

export default function(state = [], action){
    switch (action.type){
        case FETCH_RECIPE: 
            return action.payload;
    }
        
        return state
    }




