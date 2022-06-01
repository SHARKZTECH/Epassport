import React from 'react'
import {Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const ApplicationSteps = ({step1,step2,step3,step4,step5,step6}) => {
    return (
        <Nav className="justify-content-center mb-4">
           <Nav.Item>
               {step1 ? (
                    <LinkContainer to='/login'>
                    <Nav.Link>Login</Nav.Link>
                   </LinkContainer>
               ):(
                <Nav.Link disabled>Login</Nav.Link>
               )}             
           </Nav.Item> 

           <Nav.Item>
               {step2 ? (
                    <LinkContainer to='/instructions'>
                    <Nav.Link>Instructions</Nav.Link>
                   </LinkContainer>
               ):(
                <Nav.Link disabled>Instructions</Nav.Link>
               )}             
           </Nav.Item> 

           <Nav.Item>
               {step3 ? (
                    <LinkContainer to='/part1'>
                    <Nav.Link>Part 1</Nav.Link>
                   </LinkContainer>
               ):(
                <Nav.Link disabled>Part 1</Nav.Link>
               )}             
           </Nav.Item> 

           <Nav.Item>
               {step4 ? (
                    <LinkContainer to='/part2'>
                    <Nav.Link>Part 2</Nav.Link>
                   </LinkContainer>
               ):(
                <Nav.Link disabled>Part 2</Nav.Link>
               )}             
           </Nav.Item> 

           <Nav.Item>
               {step5 ? (
                    <LinkContainer to='/part3'>
                    <Nav.Link>Part 3</Nav.Link>
                   </LinkContainer>
               ):(
                <Nav.Link disabled>Part 3</Nav.Link>
               )}             
           </Nav.Item> 

           <Nav.Item>
               {step6 ? (
                    <LinkContainer to='/part4'>
                    <Nav.Link>Part 4</Nav.Link>
                   </LinkContainer>
               ):(
                <Nav.Link disabled>Part 4</Nav.Link>
               )}             
           </Nav.Item>
        </Nav>
    )
}

export default ApplicationSteps;