import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducers/index';

if(localStorage.getItem("userData") === null && localStorage.getItem("productData") === null)
{
    localStorage.setItem("userData",JSON.stringify([]));
    localStorage.setItem("productData", JSON.stringify([]));
}


// let initialState = {
//     currentIndex : -1,
//     productIndex : -1,
//     userList : JSON.parse(localStorage.getItem("userData")),
//     productList : JSON.parse(localStorage.getItem("productData"))
// }


// const middleware = [thunk];

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)



export default store