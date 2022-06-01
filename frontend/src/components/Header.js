import React from 'react'
import { Navbar,Container,Nav, NavDropdown, Image,} from 'react-bootstrap'
import {LinkContainer } from "react-router-bootstrap";
import { useDispatch,useSelector} from "react-redux"
import {logout} from "../actions/userActions"
import SearchBox from './SearchBox';

import LOGO from "../assets/ecitizen-logo.png"

const Header = ({keyHandler}) => {
  const dispatch = useDispatch()
  const userLogin=useSelector(state=>state.userLogin)
  const {userInfor}=userLogin;

  const logoutUser=()=>{
     dispatch(logout());
  }

 return (      
<header>
<Navbar  bg="primary" variant="dark" expand="lg" collapseOnSelect fixed >
  <Container>
    <LinkContainer to="/">
    <Navbar.Brand>
      <Image src={LOGO} alt="ECITIZEN"/>
    </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      {/* <SearchBox keyHandler={keyHandler}/> */}
      
      <Nav style={{marginLeft:'auto'}}>

      <LinkContainer to="/requirements">
        <Nav.Link>
             Requirements
        </Nav.Link>
        </LinkContainer>        
       
         {userInfor ? (
           <>

            <LinkContainer to={!userInfor ? `/login?redirect=instructions` : `/instructions` }>
            <Nav.Link>
                Apply
            </Nav.Link>
            </LinkContainer>

           <NavDropdown title={userInfor.name} id="username">
              <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutUser}>Log Out</NavDropdown.Item>

           </NavDropdown>
           </>
         ) : (
          <LinkContainer to="/login">
          <Nav.Link>
          <i className="fas fa-user" aria-hidden="true"></i>
              Login
              </Nav.Link>
              </LinkContainer>

         )         
        } 

        {userInfor && userInfor.isAdmin && (
             <NavDropdown title='Admin' id="adminmenue">

             <LinkContainer to='/userlist'>
                 <NavDropdown.Item>Users</NavDropdown.Item>
             </LinkContainer>

             <LinkContainer to='/productlist'>
                 <NavDropdown.Item>Products</NavDropdown.Item>
             </LinkContainer>

             <LinkContainer to='/orderlist'>
                 <NavDropdown.Item>Orders</NavDropdown.Item>
             </LinkContainer>
           </NavDropdown>
        )}  

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

</header>
     
    )
}

export default Header
