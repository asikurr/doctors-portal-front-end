import React from 'react';
import Calendar from 'react-calendar';
import { Col, Container, Row } from 'react-bootstrap';
import chair from '../../../images/chair.png'
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({ handleDateChange}) => {
    
    return (
        <main>
            <Container fluid={true}>
                <Row style={{ height: '600px' }} className="d-flex align-items-center">
                    <Col md={{ span: 4, offset: 1 }}>
                        <div>
                            <h1 style={{ color: '#3A4256' }}>Appointment</h1>
                            <Calendar
                                onChange={handleDateChange}
                                value={new Date()}
                            />
                        </div>
                    </Col>

                    <Col md={6}>
                        <img className="img-fluid" src={chair} alt="" />
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default AppointmentHeader;