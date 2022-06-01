import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {Link,useNavigate} from "react-router-dom"
import { Form,Button,Col,Row } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {login} from "../actions/userActions"
import FormContainer from "../components/FormContainer"

const LoginScreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch();
    const navigate = useNavigate();

     const  userLogin=useSelector(state=>state.userLogin)
     const {error,loading,userInfor} =userLogin;

    // const redirect=window.location.search ? window.location.search.split('=')[1] : '';
    const redirect=window.location.hash !=="#/login"  ? window.location.hash.split('=')[1] : '';

   
    useEffect(()=>{
        if(userInfor){
            navigate(`/${redirect}`)
        }

    },[userInfor,redirect,navigate])

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(login(email,password));
    }
    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && (<Loader/>)}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
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
                <Button type="submit" variant='primary' className="my-3">Login</Button>
            </Form>
            <Row className="py-3">
                <Col>
                   Don't have account ? <Link to={redirect ? `/register?redirect=${redirect}` : `/register` }>Sing Up</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen
