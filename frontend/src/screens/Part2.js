import FormContainer from "../components/FormContainer"
import ApplicationSteps from "../components/ApplicationSteps"
import { Row,Button,Col,Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import EContactForm from "../components/EContactForm";
import { useState } from "react";

const Part2=()=>{
    const navigate=useNavigate()

    const [state1,setState1]=useState({
        "name":"",
        "division":"",
        "location":"",
        "relationship":"",
        "id_number":"",
        "address":"",
        "phone":"",
        "email":""
    })

    const [state2,setState2]=useState({
        "name":"",
        "division":"",
        "location":"",
        "relationship":"",
        "id_number":"",
        "address":"",
        "phone":"",
        "email":""
    })

    const handleChange1=(e)=>{
        const name=e.target.name;
        const value=e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setState1({
            ...state1,[name]:value
        })
    }

    const handleChange2=(e)=>{
        const name=e.target.name;
        const value=e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setState2({
            ...state2,[name]:value
        })
    }

    console.log(state1)
    console.log(state2)

    const submitHandler=(e)=>{
        e.preventDefault()
        navigate("/part3") 
    }
    return(
        <>
            <ApplicationSteps step1 step2 step3 step4/>
            <h1>Section 5</h1>

            <h4>
                <span>Watu wa kupashwa habari dharura jambo linapotokea</span>
                <br/>
                <span>Particulars of Next of Kin (Person who may be contacted in case of emergency)</span>
            </h4>
            <Row>
                <Col>
                  <EContactForm part={'a)'} handleChange1={handleChange1} state1={state1}/>
                </Col>
                <Col>
                <EContactForm part={'b)'}  handleChange2={handleChange2} state2={state2}/>
                </Col>
            </Row>



         
            <Button onClick={submitHandler} type="submit" variant='primary' className="my-3" >Continue</Button>
        </>
    )
    
}
export default Part2