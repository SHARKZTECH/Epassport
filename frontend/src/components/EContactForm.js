import { Row,Button,Col,Form} from "react-bootstrap";

const EContactForm=({part,state1,state2,handleChange1,handleChange2})=>{
    return(
        <>
           {part}
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
                value={part === 'a)' ? state1.name : state2.name}
                onChange={part === 'a)' ? handleChange1 : handleChange2}              
                ></Form.Control>
            </Form.Group> 

            <Form.Group controlId='division'>
                <Form.Label>
                    <span>Tarafan</span>                 
                    <span>/ Division</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Kanairo"  
                name="division"
                value={part === 'a)' ? state1.division : state2.division}
                onChange={part === 'a)' ? handleChange1 : handleChange2}             
                ></Form.Control>
            </Form.Group> 

            <Form.Group controlId='location'>
                <Form.Label>
                    <span>Kata</span>                  
                    <span>/ Location</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:Kanairo"  
                name="location"
                value={part === 'a)' ? state1.location : state2.location}
                onChange={part === 'a)' ? handleChange1 : handleChange2}                             
                ></Form.Control>
            </Form.Group> 

            <Form.Group controlId='relationship'>
                <Form.Label>
                    <span>Uhusiano naye</span>                  
                    <span>/Relationship</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Aunt"  
                name="relationship"
                value={part === 'a)' ? state1.relationship : state2.relationship}
                onChange={part === 'a)' ? handleChange1 : handleChange2}              
                ></Form.Control>
            </Form.Group>
        
            <Form.Group controlId='id_number'>
                <Form.Label>
                    <span>Nambari ya Kitambulisho chake</span>                  
                    <span>/ID No</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38292827" 
                name="id_number"
                value={part === 'a)' ? state1.id_number : state2.id_number}
                onChange={part === 'a)' ? handleChange1 : handleChange2}              
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='address'>
                <Form.Label>
                    <span>S.L. P</span>              
                    <span>/P.O Box</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: 6666-0001"  
                name="address"
                value={part === 'a)' ? state1.address : state2.address}
                onChange={part === 'a)' ? handleChange1 : handleChange2}              
                ></Form.Control>
              </Form.Group>

            <Form.Group controlId='phone'>
                <Form.Label>
                    <span>Nambari ya simu</span>               
                    <span>/Tel. No.</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 0707070707" 
                name="phone"
                value={part === 'a)' ? state1.phone : state2.phone}
                onChange={part === 'a)' ? handleChange1 : handleChange2}              
                ></Form.Control>
             </Form.Group>

             <Form.Group controlId='email'>
                <Form.Label>
                    <span>Barua Pepe</span>                   
                    <span>/Email</span>
                </Form.Label>
                <Form.Control
                required
                type="email"
                placeholder="eg: sharkz@gmail.com"  
                name="email"
                value={part === 'a)' ? state1.email : state2.email}
                onChange={part === 'a)' ? handleChange1 : handleChange2}               
                ></Form.Control>
            </Form.Group>
        </>
    )
}

export default EContactForm;