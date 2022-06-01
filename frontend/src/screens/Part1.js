import FormContainer from "../components/FormContainer"
import ApplicationSteps from "../components/ApplicationSteps"
import { Row,Button,Col,Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import DatePicker from 'react-date-picker';
import React, { useState } from 'react';

const Part1=()=>{
    const navigate=useNavigate()
    const [value, onChange] = useState(new Date());
    const [state,setState]=useState({
      "name":"",
      "birthPlace":"",
      "birthDate":value,
      "pin":"",
      "nameChanged":"",
      "address":"",
      "phone":"",
      "home_phone":"",
      "estate_sublocation":"",
      "plot_village":"",
      "email":"",

      "citizenBy":"",

      "marriage_status":"",
      "partner_name":"",
      "maiden_name":"",
      "marriage_detail":"",

      "reason_travel":"",
      
      "id_number":"",
      "country":"",
      "job":"",
      "height":"",
      "eye_color":"",
      "mark":"",

      "mother_name":"",
      "mother_id":"",
      "mother_passport":"",
      "mother_birthPlace":"",
      "mother_address":"",
      "mother_phone":"",

      "father_name":"",
      "father_id":"",
      "father_passport":"",
      "father_birthPlace":"",
      "father_address":"",
      "father_phone":""
                  
  })

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setState({
        ...state,[name]:value
    })
}  


console.log(state)

    const submitHandler=(e)=>{
        e.preventDefault()
        navigate("/part2") 
    }
    return(
        <>
            <ApplicationSteps step1 step2 step3/>
            <h1>Section 1</h1>
            <Row>
                <Col>

                <Form.Group controlId='name'>
                <Form.Label>
                    <span>Majina Kamili</span>
                    <br/>
                    <span>Full Names</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:Empiror Sharkz Reigns" 
                name="name"
                value={state.name}
                onChange={handleChange}              
                ></Form.Control>
               </Form.Group> 


               <Form.Group controlId='birthPlace'>
                <Form.Label>
                    <span>Mahali pa kuzaliwa</span>
                    <br/>
                    <span>Place of birth</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:M/b" 
                name="birthPlace"
                value={state.birthPlace}
                onChange={handleChange}              
                ></Form.Control>
               </Form.Group> 
            
               <Form.Group controlId='bdate'>
                <Form.Label>
                    <span>Tarehe ya Kuzaliwa</span>
                    <br/>
                    <span>Date of birth</span>
                </Form.Label>
                <div>
                <DatePicker onChange={onChange} value={value} />
                </div>
               </Form.Group> 

               <Form.Group controlId='pin'>
                <Form.Label>
                    <span>Nambari ya Kodi</span>
                    <br/>
                    <span>Personal Identification Number(PIN)</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38292827"  
                name="pin"
                value={state.pin}
                onChange={handleChange}             
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='nameChanged'>
                <Form.Label>
                    <span>Iwapo jina limebadilishwa kwa sababu nyingine mbali na ya ndoa,andika jina lako la zamani:</span>
                    <br/>
                    <span>If name has been changed other than by marriage, state original name:</span>
                </Form.Label>
                <Form.Control
                type="text"
                placeholder="eg: Empiror Sharkz Reigns" 
                name="nameChanged"
                value={state.nameChanged}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='address'>
                <Form.Label>
                    <span>Anwani ya posta</span>
                    <br/>
                    <span>Postal Address</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: 6666-0001" 
                name="address"
                value={state.address}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='phone'>
                <Form.Label>
                    <span>Nambari ya simu</span>
                    <br/>
                    <span>Tel. No.</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 0707070707" 
                name="phone"
                value={state.phone}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>
              
              <h3>Mahali unapoishi/Residential address:</h3>
              <Form.Group controlId='estate_sublocation'>
                <Form.Label>
                    <span>Eneo la Makazi au Mtaa</span>
                    <span>/Estate /Sublocation</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Caren" 
                name="estate_sublocation"
                value={state.estate_sublocation}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='plt'>
                <Form.Label>
                    <span>Nambari ya Ploti</span>                 
                    <span>/Plot No/ Hse. No./ Kijiji/ Village</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Caren" 
                name="plot_village"
                value={state.plot_village}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='home_phone'>
                <Form.Label>
                    <span>Nambari ya simu ya Nyumbani</span>             
                    <span>/Home Tel No</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 0707070707"
                name="home_phone"
                value={state.home_phone}
                onChange={handleChange}               
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>
                    <span>Barua Pepe</span>                   
                    <span>/Tel. No.</span>
                </Form.Label>
                <Form.Control
                required
                type="email"
                placeholder="eg: sharkz@gmail.com" 
                name="email"
                value={state.email}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='phone'>
                <Form.Label>
                    <span>Simu ya Mkono</span>                  
                    <span>/Mobile phone Numbe</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 0707070707" 
                name="phone"
                value={state.phone}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

              <h4>Section 2</h4>

              <Form.Group controlId='citizenBy'>
                <Form.Label>
                    <span>Mwananchi wa Kenya kwa: (Chagua neno lifaalo)</span>  
                    <br/>                
                    <span>Citizen by: (Tick the appropriate box)</span>
                </Form.Label>
                <div key={"inline-radio"} className="mt-1">
                  <Form.Check
                  inline
                  label='Kuzaliwa/Birth'
                  type="radio"
                  id="inline-radio-1"

                  name="citizenBy"
                  value={'birth'}
                  checked={state.citizenBy === 'birth'}
                  onChange={handleChange}  
                  ></Form.Check>
                     <Form.Check
                  inline
                  label='Ukoo/Decent'
                  type="radio"
                  id="inline-radio-2"

                  name="citizenBy"
                  value={'decent'}
                  checked={state.citizenBy === 'decent'}
                  onChange={handleChange}
                  ></Form.Check>
                     <Form.Check
                  inline
                  label='Kujiandikisha/Naturalisation'
                  type="radio"
                  id="inline-radio-3"

                  name="citizenBy"
                  value={'naturalisation'}
                  checked={state.citizenBy === 'naturalisation'}
                  onChange={handleChange}
                  ></Form.Check>
                </div>           
              </Form.Group>

              <h4>Section 3</h4>
              <h5>Hali ya Ndoa/Marital Status:</h5>
              <Form.Group controlId='marriage_status'>
                <Form.Label>
                    <span>Taja kama umeoa/olewa, hujaolewa ,Umetaliki/Talikiwa/Umetengana au Mjane:</span>   
                    <br/>              
                    <span>Married, Single, Widowed, Separated or Divorced:</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                name="marriage_status"
                value={state.marriage_status}
                onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='partner_name'>
                <Form.Label>
                    <span>Majina kamili ya mke/mume</span> 
                    <br/>                
                    <span>Spouse’s full names</span>
                </Form.Label>
                <Form.Control
                type="text"
                name="partner_name"
                value={state.partner_name}
                onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='maiden_name'>
                <Form.Label>
                    <span>Jina la usichana(pale inapohusu)</span>  
                    <br/>               
                    <span>Maiden name</span>
                </Form.Label>
                <Form.Control
                type="text"
                name="maiden_name"
                value={state.maiden_name}
                onChange={handleChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='marriage_detail'>
                <Form.Label>
                    <span>Tarehe na mahali pa kuoa/kuolewa</span>
                    <br/>                 
                    <span>Date and place of marriage</span>
                </Form.Label>
                <Form.Control
                type="text"
                name="marriage_detail"
                value={state.marriage_detail}
                onChange={handleChange}
                ></Form.Control>
              </Form.Group>

              <h4>Section 4</h4>
              <Form.Group controlId='reason_travel'>
                <Form.Label>
                    <span>Sababu ya kusafiri</span>
                    <br/>                 
                    <span>Reason for travel</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                name="reason_travel"
                value={state.reason_travel}
                onChange={handleChange}
                ></Form.Control>
              </Form.Group>

              

                </Col>

                <Col>

                <Form.Group controlId='id_number'>
                <Form.Label>
                    <span>Nambari Ya Kitambulisho</span>
                    <br/>
                    <span>Identity Card Numbe</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38292827" 
                name="id_number"
                value={state.id_number}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='country'>
                <Form.Label>
                    <span>Nchi unayoishi</span>
                    <br/>
                    <span>Country of residence</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Kenya"  
                name="country"
                value={state.country}
                onChange={handleChange}             
                ></Form.Control>
              </Form.Group> 

              <Form.Group controlId='job'>
                <Form.Label>
                    <span>Kazi</span>
                    <br/>
                    <span>Profession/Occupation</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Programmer" 
                name="job"
                value={state.job}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group> 

              <Form.Group controlId='height'>
                <Form.Label>
                    <span>Kimo</span>   
                    <br/>             
                    <span>Height</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38ft" 
                name="height"
                value={state.height}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='eye_color'>
                <Form.Label>
                    <span>Rangi ya Macho</span>   
                    <br/>             
                    <span>Rangi ya Macho</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: blue" 
                name="eye_color"
                value={state.eye_color}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='mark'>
                <Form.Label>
                    <span>Alama isiyo ya kawaida</span>  
                    <br/>              
                    <span>Special peculiarities:</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: tatoo" 
                name="mark"
                value={state.mark}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

               <h5 className="mt-2">MOTHER</h5>

              <Form.Group controlId='mother_name'>
                <Form.Label>
                    <span>Majina Kamili ya Mama </span> 
                    <br/>              
                    <span>/Mother’s Full Name</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:Empiror Sharkz Reigns" 
                  name="mother_name"
                value={state.mother_name}
                onChange={handleChange}              
                ></Form.Control>
               </Form.Group> 
               
               <Form.Group controlId='mother_id'>
                <Form.Label>
                    <span>Nambari Ya Kitambulisho</span>
                    <br/>
                    <span>Identity Card Numbe</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38292827" 
                name="mother_id"
                value={state.mother_id}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

              
                <Form.Group controlId='mother_passport'>
                <Form.Label>
                    <span>Nambari ya Paspoti (au Rno.)</span>
                    <br/>
                    <span>Passport No. (or Rno.)</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                name="mother_passport"
                value={state.mother_passport}
                onChange={handleChange}
                ></Form.Control>
              </Form.Group>              


               <Form.Group controlId='mother_birthPlace'>
                <Form.Label>
                    <span>Mahali Mama alipozaliwa</span>  
                    <br/>          
                    <span>Place of Mother’s birth:</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:M/b"  
                name="mother_birthPlace"
                value={state.mother_birthPlace}
                onChange={handleChange}             
                ></Form.Control>
               </Form.Group> 

               <Form.Group controlId='mother_address'>
                <Form.Label>
                    <span>S L P</span>   
                    <br/>             
                    <span>P.O. Box</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: 6666-0001"  
                name="mother_address"
                value={state.mother_address}
                onChange={handleChange}             
                ></Form.Control>
              </Form.Group>


              <Form.Group controlId='mother_phone'>
                <Form.Label>
                    <span>Nambari ya Simu</span>  
                    <br/>                
                    <span>Tel</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 0707070707"
                name="mother_phone"
                value={state.mother_phone}
                onChange={handleChange}               
                ></Form.Control>
              </Form.Group>

              <h5 className="mt-3">FATHER</h5>

              <Form.Group controlId='father_name'>
                <Form.Label>
                    <span>Majina Kamili ya Baba </span> 
                    <br/>              
                    <span>Father’s Full Name</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:Empiror Sharkz Reigns" 
                name="father_name"
                value={state.father_name}
                onChange={handleChange}              
                ></Form.Control>
               </Form.Group> 
               
               <Form.Group controlId='father_id'>
                <Form.Label>
                    <span>Nambari Ya Kitambulisho</span>
                    <br/>
                    <span>Identity Card Numbe</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38292827" 
                name="father_id"
                value={state.father_id}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>

              
                <Form.Group controlId='father_passport'>
                <Form.Label>
                    <span>Nambari ya Paspoti (au Rno.)</span>
                    <br/>
                    <span>Passport No. (or Rno.)</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                name="father_passport"
                value={state.father_passport}
                onChange={handleChange}
                ></Form.Control>
              </Form.Group>              


               <Form.Group controlId='father_birthPlace'>
                <Form.Label>
                    <span>Mahali Baba alipozaliwa</span>   
                    <br/>         
                    <span>Place of Father’s birth:</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:M/b" 
                name="father_birthPlace"
                value={state.father_birthPlace}
                onChange={handleChange}              
                ></Form.Control>
               </Form.Group> 

               <Form.Group controlId='father_address'>
                <Form.Label>
                    <span>S L P</span>  
                    <br/>              
                    <span>P.O. Box</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: 6666-0001" 
                name="father_address"
                value={state.father_address}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>


              <Form.Group controlId='father_phone'>
                <Form.Label>
                    <span>Nambari ya Simu</span>   
                    <br/>               
                    <span>Tel No</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 0707070707" 
                name="father_phone"
                value={state.father_phone}
                onChange={handleChange}              
                ></Form.Control>
              </Form.Group>


              
                </Col>
            </Row>
            <Button onClick={submitHandler} type="submit" variant='primary' className="my-3" >Continue</Button>
        </>
    )
}
export default Part1;