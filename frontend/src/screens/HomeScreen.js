import React,{useEffect} from 'react'
import {Button, Carousel} from "react-bootstrap";
import IMG from "../assets/ecitizen-carousel-1.png"
import {useNavigate} from "react-router-dom"


const HomeScreen = ({keyw}) => {
    const navigate=useNavigate()


    return (
        <Carousel pause='hover' className='bg-dark'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={IMG}
            alt="img"
          />   
           <Carousel.Caption className='carousel.caption'>
                <h4>Epassport System</h4>
                <h5>Apply For Passport Online TekeTeke!</h5>
                <p>
                    <Button onClick={()=>navigate("/register")}>Create Account</Button>
                </p>
           </Carousel.Caption>    
        </Carousel.Item>    

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={IMG}
            alt="img"
          />  
           <Carousel.Caption className='carousel.caption'>
                <h4>Epassport System</h4>
                <h5>Check Requirements for Passport Application</h5>
                <p>
                    <Button onClick={()=>navigate("/requirements")}>Requirements</Button>
                </p>
           </Carousel.Caption>       
        </Carousel.Item>   
      </Carousel>
    )
}

export default HomeScreen
