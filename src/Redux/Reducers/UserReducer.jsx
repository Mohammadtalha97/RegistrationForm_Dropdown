import {
    INSERT_USER,
    DELETE_USER,
    UPDATE_USER,
    UPADTE_INDEX
} from '../Constants/UserConstant';


const userList = JSON.parse(localStorage.getItem("userData"));

const userReducer = (state = [], action) => {
    
    switch(action.type){
        case INSERT_USER :
            userList.push(action.payload);
            localStorage.setItem("userData", JSON.stringify(userList))
            return{
                userList, currentIndex : -1   
            }
        
        default : return state
    }
    console.log("user reducer state", state)
}


export default userReducer;