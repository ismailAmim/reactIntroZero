import {
    CHANGE_SEARCH_FIELD,
    REUEST_ROBOTS_PENDING,
    REUEST_ROBOTS_SUCCESS,
    REUEST_ROBOTS_FAILED    
} from './constant';

// the state in initialState
const initialStateSearch = {
    searchField : ''
};

export const searchRobots = (state = initialStateSearch, action ={}) =>{
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
const initialStateRobots = {
    isPending : false,
    robots : [],
    isError : ''
};

export const reuestRobots = (state = initialStateRobots, action ={}) =>{
    console.log(action.type);
    switch (action.type) {
        case REUEST_ROBOTS_PENDING:   
            return Object.assign(
                    {},
                    state,
                    {isPending : true});; 
        case REUEST_ROBOTS_SUCCESS:
            return Object.assign(
                           {},
                           state,
                           {robots : action.payload,isPending :false});
        case REUEST_ROBOTS_FAILED:
            return Object.assign(
                            {},
                            state,
                            {isError : action.payload, isPending:false}); 
                   
    // or just {...state,{searchField : action.payload} } 
    default:
            return state;
    }
}