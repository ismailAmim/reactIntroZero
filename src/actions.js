import {
    CHANGE_SEARCH_FIELD,
    REUEST_ROBOTS_PENDING,
    REUEST_ROBOTS_SUCCESS,
    REUEST_ROBOTS_FAILED    
} from './constant';

export const setSearchField = (text) =>
    ({
     type : CHANGE_SEARCH_FIELD,
     payload: text
    });
// should change the action as function that return a function
// reuestRobots= ()=> (dispatch) =>{ ../ function code}


export const reuestRobots= ()=> (dispatch) => {
    // first  state we just dispatch without payload
    dispatch({  type : REUEST_ROBOTS_PENDING });
    // we fetch for data
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // if loading with success we just dispatch action
        // REUEST_ROBOTS_SUCCESS with the data 
        .then(data=>dispatch({
            type : REUEST_ROBOTS_SUCCESS,
            payload : data}))
        // if loading with ERRORS we just catch 
        // REUEST_ROBOTS_FAILED with the error 
        .catch (error=>dispatch({
            type : REUEST_ROBOTS_FAILED,
            payload :error}));

} 