import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {Link,useNavigate,useParams} from "react-router-dom"
import { Form,Button} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from "../components/FormContainer"
import {getUserDetails,updateUser} from "../actions/userActions"
import { USER_UPDATE_RESET } from '../constants/userConstants';

const UserEditScreen = () => {
    const params=useParams()
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [isAdmin,setAdmin]=useState(false)

    const userId=params.id;

     const  userDetails=useSelector(state=>state.userDetails)
     const {error,loading,user} =userDetails;

     const  userUpdate=useSelector(state=>state.userUpdate)
     const {success:successUpdate,error:errorUpdate,loading:loadingUpdate} =userUpdate;
      
     console.log(user)
     useEffect(()=>{
         if(successUpdate){
            dispatch({type:USER_UPDATE_RESET})
            navigate("/userlist")
         }else{
            if(!user.name || user._id !== Number(userId)){
                dispatch(getUserDetails(userId))
            }else{
                setName(user.name)
                setEmail(user.email)
                setAdmin(user.isAdmin)
            }
         }
     },[userId,dispatch,user,successUpdate,navigate])

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(updateUser({
            _id:user._id,
            name,
            email,
            isAdmin
        }))
       
    }
    return (
    <div>
    <Link to="/userlist" className='arrow btn btn-light my-3'><i className='fas fa-arrow-left'></i></Link>
        
     <FormContainer>
        <h1>Edit User</h1> 
         {loadingUpdate && (<Loader/>)}
         {errorUpdate && (<Message variant={'danger'}>{error}</Message>)}
          {loading ? (<Loader/> ) :
          error ? (<Message variant="danger">{error}</Message>):( 

        <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                ></Form.Control>
            </Form.Group> 

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>  

            <Form.Group controlId='isadmin'>
                <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e)=>setAdmin(e.target.checked)}
                ></Form.Check>
            </Form.Group>          
            <Button type="submit" variant='primary' className="my-3">Update</Button>
        </Form>
       )} 

    </FormContainer> 

    </div>
    )
}

export default UserEditScreen
