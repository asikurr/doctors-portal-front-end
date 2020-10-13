import React from 'react';
import { Container, Row } from 'react-bootstrap';
import fluoride from '../../images/fluoride-icon.png'
import cavity from '../../images/cavity-icon.png'
import whitening from '../../images/whitening-teeth.png'
import ServicesCard from '../ServicesCard/ServicesCard';

const serviceData = [
    {
        id:1,
        icon: fluoride,
        title:'Fluoride Treatment',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 2,
        icon: cavity,
        title: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 3,
        icon: whitening,
        title: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
]
const Services = () => {
    return (
        <Container>
            <div className="service-container text-center">
                <h5 className="service-title">Our Services</h5>
                <h2 className="service-subtitle">Services We Provide</h2>
            </div>
            <Row>
                {
                    serviceData.map(service => <ServicesCard key={service.id} service={service} /> )
                }
            </Row>
        </Container>
    );
};

export default Services;