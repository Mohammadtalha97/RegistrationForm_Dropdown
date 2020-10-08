import { combineReducers } from 'redux';
import userReducer from '../Reducers/UserReducer';
import productReducer from '../Reducers/ProductReducer';


 const rootReducer = combineReducers({
    userReducer,
    productReducer
});

export default rootReducer;