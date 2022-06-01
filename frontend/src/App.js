import { Container } from 'react-bootstrap'
import { HashRouter as Router,Route,Routes} from "react-router-dom"
import {useState} from 'react'

import Header from './components/Header';
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserProfileScreen from "./screens/UserProfileScreen"

import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';

import Instructions from './screens/Instructions';
import Part1 from './screens/Part1';
import Part2 from './screens/Part2';
import Part3 from './screens/Part3';
import Part4 from './screens/Part4';



// "proxy": "http://127.0.0.1:8000",


function App() {

  const [keyw,setKeyword]=useState({})

  const keyHandler=({key,keyword})=>{
    setKeyword({key,keyword});
  }
  return (
    <div>
      <Router>
     <Header keyHandler={keyHandler}/>  
     <main className='py-3'>
       <Container className='mt-4'>
         <Routes>
          <Route exact path="/" element={<HomeScreen keyw={keyw}/>} />       

          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/register" element={<RegisterScreen/>}/>
          <Route  path="/profile" element={<UserProfileScreen/>}/>

          <Route path='/instructions' element={<Instructions/>}/>
          <Route path='/part1' element={<Part1/>}/>
          <Route path='/part2' element={<Part2/>}/>
          <Route path='/part3' element={<Part3/>}/>
          <Route path='/part4' element={<Part4/>}/>
          
          {/* ADMIN */}
          <Route path="/userlist" element={<UserListScreen/>}/>
          <Route path="/user/:id/edit" element={<UserEditScreen/>}/>        


          {/* END ADMIN */}
       

         </Routes>
       </Container>      
     </main>
     <Footer/> 
     </Router>        
    </div>
  );
}

export default App;
