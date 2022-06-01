import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT} from "../constants/userConstants"
import {USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL} from "../constants/userConstants"
import {USER_DETAILS_REQUEST,USER_DETAILS_SUCCESS,USER_DETAILS_FAIL,USER_DETAILS_RESET} from "../constants/userConstants"
import {USER_UPDATE_PROFILE_REQUEST,USER_UPDATE_PROFILE_SUCCESS,USER_UPDATE_PROFILE_FAIL,USER_UPDATE_PROFILE_RESET} from "../constants/userConstants"
import {USER_LIST_REQUEST,USER_LIST_SUCCESS,USER_LIST_FAIL,USER_LIST_RESET} from "../constants/userConstants"
import {USER_DELETE_REQUEST,USER_DELETE_SUCCESS,USER_DELETE_FAIL} from "../constants/userConstants"
import {USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS,USER_UPDATE_FAIL,USER_UPDATE_RESET} from "../constants/userConstants"

export const userLoginReducers=(state={},action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true}
         case USER_LOGIN_SUCCESS:
             return {loading:false,userInfor:action.payload}
         case USER_LOGIN_FAIL:
             return {loading:false,error:action.payload}
        case USER_LOGOUT:
            return {}
         default:
             return state
    }
}

export const userRegisterReducers=(state={},action)=>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading:true}
         case USER_REGISTER_SUCCESS:
             return {loading:false,userInfor:action.payload}
         case USER_REGISTER_FAIL:
             return {loading:false,error:action.payload}
        case USER_LOGOUT:
            return {}
         default:
             return state
    }
}

export const userDetailsReducers=(state={user:{}},action)=>{
    switch(action.type){
        case USER_DETAILS_REQUEST:
            return {...state,loading:true}
         case USER_DETAILS_SUCCESS:
             return {loading:false,user:action.payload}
         case USER_DETAILS_FAIL:
             return {loading:false,error:action.payload}
         case USER_DETAILS_RESET:
             return {user:{}}
         default:
             return state
    }
}

export const userUpdateProfileReducers=(state={},action)=>{
    switch(action.type){
        case USER_UPDATE_PROFILE_REQUEST:
            return {loading:true}
         case USER_UPDATE_PROFILE_SUCCESS:
             return {loading:false,success:true,userInfor:action.payload}
         case USER_UPDATE_PROFILE_FAIL:
             return {loading:false,error:action.payload}
         case USER_UPDATE_PROFILE_RESET:
             return {}
         default:
             return state
    }
}

export const userListReducers=(state={users:[]},action)=>{
    switch(action.type){
        case USER_LIST_REQUEST:
            return {loading:true}
         case USER_LIST_SUCCESS:
             return {loading:false,users:action.payload}
         case USER_LIST_FAIL:
             return {loading:false,error:action.payload}
         case USER_LIST_RESET:
             return {users:[]}
         default:
             return state
    }
}

export const userDeleteducers=(state={},action)=>{
    switch(action.type){
        case USER_DELETE_REQUEST:
            return {loading:true}
         case USER_DELETE_SUCCESS:
             return {loading:false,success:true}
         case USER_DELETE_FAIL:
             return {loading:false,error:action.payload}
         
         default:
             return state
    }
}

export const userUpdateducers=(state={user:{}},action)=>{
    switch(action.type){
        case USER_UPDATE_REQUEST:
            return {loading:true}
         case USER_UPDATE_SUCCESS:
             return {loading:false,success:true}
         case USER_UPDATE_FAIL:
             return {loading:false,error:action.payload}
        case USER_UPDATE_RESET:
            return {
                user:{}
            }
         
         default:
             return state
    }
}