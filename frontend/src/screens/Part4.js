import FormContainer from "../components/FormContainer"
import ApplicationSteps from "../components/ApplicationSteps"
import { Button,Card,CardGroup,Row,Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import ImageUploader from "react-images-upload";
import ImageUploading from 'react-images-uploading';
import React, { useState } from 'react';

const Part4=()=>{
    const l=["ID Card Front","ID Card Back","passport size photo","Birth Certificate","Marriage Certificate"]
    const navigate=useNavigate()
    const [mimages, setMImages] = useState([]);
    const [pimages, setPImages] = useState([]);
    const [rimages, setRImages] = useState([]);

    const maxNumber = 5;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
    //   console.log(imageList, addUpdateIndex);
       setMImages(imageList);
    }; 
    const onChange1 = (imageList, addUpdateIndex) => {
        // data for submit
         setPImages(imageList);
      };
      const onChange2 = (imageList, addUpdateIndex) => {
        // data for submit
         setRImages(imageList);
      };

      console.log(mimages);
      console.log(pimages);
      console.log(rimages);


    const submitHandler=(e)=>{
        e.preventDefault()
        // navigate("/") 
    }
    return(
        <>
            <ApplicationSteps step1 step2 step3 step4 step5 step6 />
            <h1>Upload Required Files</h1>
            <Row>
            <Col>              
                <ul>
                Upload Picture of Your:
                <li>ID Card Front</li>
                <li>ID Card Back</li>
                <li>passport size photo</li>
                <li>Birth Certificate</li>
                <li>Marriage Certificate</li>
                </ul>
            </Col> 
            <Col>
                <ul>
                Upload Picture of Father/Mother:
                <li>ID Card Front</li>
                <li>ID Card Back</li>
                <li>passport size photo</li>
                <li>Birth Certificate</li>
                </ul>                
            </Col>  
            <Col>
                <ul>
                Upload Picture of Recommender:
                <li>ID Card Front</li>
                <li>ID Card Back</li>
                <li>passport size photo</li>
                </ul>                
            </Col>                         
                    
        
              </Row>
            
            {/* <div>
            <ImageUploader
            withIcon={false}
            withPreview={true}
            buttonText="Choose images"
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            />        
            </div>   */}

            <div className="">
                <ImageUploading
                    multiple
                    maxNumber={maxNumber}
                    maxFileSize={5242880}
                    value={mimages}
                    onChange={onChange}
                dataURLKey="data_url"
                >
                    {({imageList,onImageUpload,onImageRemoveAll,
                    onImageUpdate,onImageRemove,isDragging,dragProps,
                    }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <Button
                        style={isDragging ? { color: 'red' } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                        >
                        Upload or Drop here Your Pictures
                        </Button>
                        &nbsp;
                        <Button onClick={onImageRemoveAll}>Remove all images</Button>
                        <Row xs={1} md={3} className="g-4 mt-1 mb-1">
                        {imageList.map((image, index) => (
                            <Col key={index}>
                              <Card style={{ width: '19rem' }}>
                              <Card.Img variant="top" src={image['data_url']} alt=""
                               style={{height:'300px',width:"300px"}}
                               className="p-2" />
                              <Card.Body>
                                <Card.Title>{l[index]}</Card.Title>
                                <Card.Text>
                                <Button onClick={() => onImageUpdate(index)}
                                className="mx-1">Update</Button>
                                <Button onClick={() => onImageRemove(index)}>Remove</Button>                              
                                </Card.Text>
                              </Card.Body>                      
                            </Card>  
                            </Col>                
                        ))}
                       </Row>
                    </div>
                    )}
                </ImageUploading>
                </div>

                <div className="">
                <ImageUploading
                    multiple
                    maxNumber={4}
                    maxFileSize={5242880}
                    value={pimages}
                    onChange={onChange1}
                dataURLKey="data_url"
                >
                    {({imageList,onImageUpload,onImageRemoveAll,
                    onImageUpdate,onImageRemove,isDragging,dragProps,
                    }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <Button
                        style={isDragging ? { color: 'red' } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                        >
                        Upload or Drop here Father/Mother Pictures
                        </Button>
                        &nbsp;
                        <Button onClick={onImageRemoveAll}>Remove all images</Button>
                        <Row xs={1} md={3} className="g-4 mt-1 mb-1">
                        {imageList.map((image, index) => (
                            <Col key={index}>
                              <Card style={{ width: '19rem' }}>
                              <Card.Img variant="top" src={image['data_url']} alt=""
                               style={{height:'300px',width:"300px"}}
                               className="p-2" />
                              <Card.Body>
                                <Card.Title>{l[index]}</Card.Title>
                                <Card.Text>
                                <Button onClick={() => onImageUpdate(index)}
                                className="mx-1">Update</Button>
                                <Button onClick={() => onImageRemove(index)}>Remove</Button>                              
                                </Card.Text>
                              </Card.Body>                      
                            </Card>  
                            </Col>                
                        ))}
                       </Row>
                    </div>
                    )}
                </ImageUploading>
                </div>

                <div className="">
                <ImageUploading
                    multiple
                    maxNumber={3}
                    maxFileSize={5242880}
                    value={rimages}
                    onChange={onChange2}
                dataURLKey="data_url"
                >
                    {({imageList,onImageUpload,onImageRemoveAll,
                    onImageUpdate,onImageRemove,isDragging,dragProps,
                    }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <Button
                        style={isDragging ? { color: 'red' } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                        >
                        Upload or Drop here Recommender Pictures
                        </Button>
                        &nbsp;
                        <Button onClick={onImageRemoveAll}>Remove all images</Button>
                        <Row xs={1} md={3} className="g-4 mt-1 mb-1">
                        {imageList.map((image, index) => (
                            <Col key={index}>
                              <Card style={{ width: '19rem' }}>
                              <Card.Img variant="top" src={image['data_url']} alt=""
                               style={{height:'300px',width:"300px"}}
                               className="p-2" />
                              <Card.Body>
                                <Card.Title>{l[index]}</Card.Title>
                                <Card.Text>
                                <Button onClick={() => onImageUpdate(index)}
                                className="mx-1">Update</Button>
                                <Button onClick={() => onImageRemove(index)}>Remove</Button>                              
                                </Card.Text>
                              </Card.Body>                      
                            </Card>  
                            </Col>                
                        ))}
                       </Row>
                    </div>
                    )}
                </ImageUploading>
                </div>
                
            <Button onClick={submitHandler} type="submit" variant='primary' className="my-3" >Continue</Button>
        </>
    )
    
}
export default Part4