import React,{useState,useEffect} from 'react'
import { Button,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = ({keyHandler}) => {
    const navigate=useNavigate()
    const [keyword,setKeyword]=useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
        if(keyword){
            navigate(`/?keyword=${keyword}&page=1`)
        }
        //ELSE

    }

    let key=window.location.hash != "#/" ? window.location.hash.split('#')[1] : '';;


    useEffect(()=>{
        keyHandler({key,keyword})
    },[key,keyword])


    return (
        <Form onSubmit={submitHandler} className='d-flex'>
            <Form.Control
            type="text"
            name="q"
            onChange={(e)=>setKeyword(e.target.value)}
            className="mr-sm ml-sm-5"
            ></Form.Control>
            <Button
            type='submit'
            variant='outline-success'
            className='p-2'
            >
                submit
            </Button>
        </Form>
    )
}

export default SearchBox
