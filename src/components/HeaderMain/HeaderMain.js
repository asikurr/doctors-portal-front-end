import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import chair from '../../images/chair.png'

const HeaderMain = () => {
    return (
        <main>
            <Container fluid={true}>
                <Row style={{ height: '600px' }} className="d-flex align-items-center">
                    <Col md={{ span: 4, offset: 1 }}>
                        <div>
                            <h1 style={{ color: '#3A4256' }}>You New Smile <br /> Start Here </h1>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veniam ea molestiae ad sapiente. Laboriosam!</p>
                            <button className="btn btn-primary">GET APPOINTMENT</button>
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

export default HeaderMain;