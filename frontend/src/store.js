import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"



import {userLoginReducers,
        userRegisterReducers,
        userDetailsReducers,
        userUpdateProfileReducers,
        userListReducers,
        userDeleteducers,
        userUpdateducers,

        } from "./reducers/userReducer"



const reducer=combineReducers({

    userLogin:userLoginReducers,
    userRegister:userRegisterReducers,
    userDetails:userDetailsReducers,
    userList:userListReducers,
    userDelete:userDeleteducers,
    userUpdate:userUpdateducers,
    userUpdateProfile:userUpdateProfileReducers,
   
})



const userInforStorange=localStorage.getItem('userInfor') ?
JSON.parse(localStorage.getItem('userInfor')) :null




const initialState={
    userLogin:{userInfor:userInforStorange},    
}
 
const middleware=[thunk]

const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store;