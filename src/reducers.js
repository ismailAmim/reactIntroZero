import {CHANGE_SEARCH_FIELD} from './constant';

// the state in initialState
const initialState = {
    searchField : ''
};

export const searchRobots = (state = initialState, action ={}) =>{
    console.log(action.type);
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            
            return Object.assign(
                   {},
                   state,
                   {searchField : action.payload});  
    // or just {...state,{searchField : action.payload} } 
    default:
            return state;
    }
}