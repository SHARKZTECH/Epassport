import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT} from "../constants/userConstants"
import {USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL} from "../constants/userConstants"
import {USER_DETAILS_REQUEST,USER_DETAILS_SUCCESS,USER_DETAILS_FAIL,USER_DETAILS_RESET} from "../constants/userConstants"
import {USER_UPDATE_PROFILE_REQUEST,USER_UPDATE_PROFILE_SUCCESS,USER_UPDATE_PROFILE_FAIL} from "../constants/userConstants"
import {USER_LIST_REQUEST,USER_LIST_SUCCESS,USER_LIST_FAIL,USER_LIST_RESET} from "../constants/userConstants"
import {USER_DELETE_REQUEST,USER_DELETE_SUCCESS,USER_DELETE_FAIL} from "../constants/userConstants"
import {USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS,USER_UPDATE_FAIL} from "../constants/userConstants"



import axios  from 'axios';

export const login=(email,password)=> async(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const config={
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}= await axios.post('/users/login/',
        {"username":email,"password":password},
        config
        )

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfor',JSON.stringify(data))
    }catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
    }
}


export const register=(name,email,password)=> async(dispatch)=>{
    try{
        dispatch({
            type:USER_REGISTER_REQUEST
        })
        const config={
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}= await axios.post('/users/register/',
        {"name":name,"email":email,"password":password},
        config
        )

        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
        
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfor',JSON.stringify(data))
    }catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
    }
}

export const logout=()=> (dispatch)=>{
    localStorage.removeItem("userInfor")
    dispatch({type : USER_LOGOUT})
    dispatch({type:USER_DETAILS_RESET})
    dispatch({type:USER_LIST_RESET})
}


export const getUserDetails=(id)=> async(dispatch,getState)=>{
    try{
        dispatch({
            type:USER_DETAILS_REQUEST
        })

        const {
           userLogin:{userInfor},
        }=getState()
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfor.token}`
            }
        }
        const {data}= await axios.get(`/users/${id}/`,
        config
        )

        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload:data
        })  
      

    }catch(error){
        dispatch({
            type:USER_DETAILS_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
    }
}

export const updateUserProfile=(user)=> async(dispatch,getState)=>{
    try{
        dispatch({
            type:USER_UPDATE_PROFILE_REQUEST
        })

        const {userLogin:{userInfor},}=getState()
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfor.token}`
            }
        }
        const {data}= await axios.put(`users/profile/update/`,
        user,
        config
        )

        dispatch({
            type:USER_UPDATE_PROFILE_SUCCESS,
            payload:data
        })  

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        }) 
      
     localStorage.setItem('userInfor',JSON.stringify(data))

    }catch(error){
        dispatch({
            type:USER_UPDATE_PROFILE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
    }
}

export const listUsers=()=> async(dispatch,getState)=>{
    try{
        dispatch({
            type:USER_LIST_REQUEST
        })

        const {userLogin:{userInfor},}=getState()
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfor.token}`
            }
        }
        const {data}= await axios.get(`users/`,
        config
        )

        dispatch({
            type:USER_LIST_SUCCESS,
            payload:data
        })  
    
      

    }catch(error){
        dispatch({
            type:USER_LIST_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
    }
}

export const deleteUser=(id)=> async(dispatch,getState)=>{
    try{
        dispatch({
            type:USER_DELETE_REQUEST
        })

        const {
           userLogin:{userInfor},
        }=getState()
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfor.token}`
            }
        }
        const {data}= await axios.delete(`/users/delete/${id}/`,
        config
        )

        dispatch({
            type:USER_DELETE_SUCCESS,
            payload:data
        })  
      

    }catch(error){
        dispatch({
            type:USER_DELETE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
    }
}

export const updateUser=(user)=> async(dispatch,getState)=>{
    try{
        dispatch({
            type:USER_UPDATE_REQUEST
        })

        const {
           userLogin:{userInfor},
        }=getState()
        const config={
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfor.token}`
            }
        }
        const {data}= await axios.put(`/users/update/${user._id}/`,
        user,
        config
        )

        dispatch({
            type:USER_UPDATE_SUCCESS,
        }) 
        
        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload:data
        }) 
      

    }catch(error){
        dispatch({
            type:USER_UPDATE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
    }
}