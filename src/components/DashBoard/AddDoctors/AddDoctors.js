import React, { useState} from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctors = () => {

    const [doctorInfo, setDoctorInfo] = useState({})
    const [imageFile, setImageFile] = useState(null)

    const handleDoctorInfo = (e) => {
        const newDoctorInfo = {...doctorInfo}
        newDoctorInfo[e.target.name] = e.target.value
        setDoctorInfo(newDoctorInfo)
    }

    const handleImageFile = (e) => {
        setImageFile(e.target.files[0])
    }

    const handleFormSubmit = () => {
        const formData = new FormData()
        formData.append('imageFile', imageFile)
        formData.append('name', doctorInfo.name)
        formData.append('email', doctorInfo.email)

        fetch('http://localhost:4000/addDoctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <Container fluid={true}>
            <Row>
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10">
                    <h2>Add Doctors</h2>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="Name">
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control onBlur={handleDoctorInfo} type="name" name="name" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleDoctorInfo} type="email" email="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>

                        </Form.Group>
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Your Image</Form.File.Label>
                            <Form.File.Input onChange={handleImageFile} />
                        </Form.File>
                        <Button variant="primary" className="mt-3" type="submit">
                            Add Doctor
                    </Button>
                    </Form>
                    
                </div>

              
            </Row>
        </Container>
    );
};

export default AddDoctors;