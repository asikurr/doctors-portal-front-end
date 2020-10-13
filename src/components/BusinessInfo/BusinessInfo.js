import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarked, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { Container, Row } from 'react-bootstrap';

const infoData = [
    {
        id:1,
        title:'Opening Hours',
        description:'we are open from 9am to 8pm',
        icon:faClock,
        backgroundColor:'primary'
    },
    {
        id: 2,
        title: 'Visite Our Location',
        description: 'House No#6A, East Rampura, Dhaka',
        icon: faMapMarked,
        backgroundColor: 'dark'
    },
    {
        id: 3,
        title: 'Contact Us Now',
        description: '+8801823980517',
        icon: faPhoneVolume ,
        backgroundColor: 'primary'
    },
]

const BusinessInfo = () => {
    return (
        <Container>
           <Row>
                {
                    infoData.map(info => <InfoCard key={info.id} info={info} />)
                }  
           </Row> 
        </Container>
    );
};

export default BusinessInfo;