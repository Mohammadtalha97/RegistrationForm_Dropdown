import {
    INSERT_USER,
    DELETE_USER,
    UPDATE_USER,
    UPADTE_INDEX
} from '../Constants/UserConstant';


export const userInsert = (data) => {
    return {
        type : INSERT_USER,
        payload : data 
    }
}


// function userInsert (data) 
// {
//     return {
//         type : INSERT_USER,
//         payload : data 
//     }
// }

// export function getUserData(){
//     return dispatch => {
//         dispatch(userInsert());
//     }
// }

