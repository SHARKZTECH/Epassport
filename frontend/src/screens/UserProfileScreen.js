import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { Form,Button,Col,Row,Table } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {getUserDetails,updateUserProfile} from "../actions/userActions"
import {USER_UPDATE_PROFILE_RESET} from "../constants/userConstants"
import { LinkContainer } from 'react-router-bootstrap';

const UserProfileScreen = () => {
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState('')

    const dispatch=useDispatch();
     const navigate=useNavigate()
     const  userDetails=useSelector(state=>state.userDetails)
     const {error,loading,user} =userDetails;
     
     const  userLogin=useSelector(state=>state.userLogin)
     const {userInfor} =userLogin;

     const  userUpdateProfile=useSelector(state=>state.userUpdateProfile)
     const {success} =userUpdateProfile;

  
     
    useEffect(()=>{
        if(!userInfor){
           navigate('/login')
        }else{
           if(!user || !user.name || success || userInfor._id!==user._id){
               dispatch({type:USER_UPDATE_PROFILE_RESET})
               dispatch(getUserDetails('profile'))
           }else{
               setName(user.name)
               setEmail(user.email)
           } 
        }
    },[dispatch,userInfor,user,success,navigate])

    const submitHandler=(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage("passwords do not  match")
        }else{
            dispatch(updateUserProfile({
                'id':user._id,
                'name':name,
                'email':email,
                'password':password
            }))
            setMessage('')
        }
    }
    return (
        <Row>
           <Col md={3}>
               <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && (<Loader/>)}
        <Form onSubmit={submitHandler}>

        <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                ></Form.Control>
            </Form.Group> 

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>  

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                ></Form.Control>
            </Form.Group> 

            <Form.Group controlId='passwordConfirm'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Confrim Password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                ></Form.Control>
            </Form.Group> 

            <Button type="submit" variant='primary' className="my-3">Update</Button>
        </Form>

           </Col>
           <Col md={9}>
               <h2>PassPort Status</h2>

            </Col> 
        </Row>
    )
}

export default UserProfileScreen
