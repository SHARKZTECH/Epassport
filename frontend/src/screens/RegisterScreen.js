import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {Link,useNavigate} from "react-router-dom"
import { Form,Button,Col,Row } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {register} from "../actions/userActions"
import FormContainer from "../components/FormContainer"

const RegisterScreen = () => {
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState('')


    const dispatch=useDispatch();
    const navigate = useNavigate();

     const  userRegister=useSelector(state=>state.userRegister)
     const {error,loading,userInfor} =userRegister;

     const redirect=window.location.search ? window.location.search.split('=')[1] : '';

    useEffect(()=>{
        if(userInfor){
            navigate(`/${redirect}`)
        }

    },[userInfor,redirect,navigate])

    const submitHandler=(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage("passwords do not  match")
        }else{
            dispatch(register(name,email,password));
        }
    }
    return (
        <FormContainer>
        <h1>Sign Up</h1>
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
                required
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                ></Form.Control>
            </Form.Group> 

            <Form.Group controlId='passwordConfirm'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                required
                type="password"
                placeholder="Confrim Password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                ></Form.Control>
            </Form.Group> 

            <Button type="submit" variant='primary' className="my-3">Register</Button>
        </Form>
        <Row className="py-3">
            <Col>
               Already Have an Account ? <Link to={redirect ? `/login?redirect=${redirect}` : `/login` }>Sing In</Link>
            </Col>
        </Row>
    </FormContainer>
    )
}

export default RegisterScreen
