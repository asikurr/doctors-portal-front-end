import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Row } from 'react-bootstrap';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor:'#F4FDFB',
    height: '100%'
}

const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointment, setAppointment] = useState([])

    const handleDateChange = date => {
        setSelectedDate(date)
        // console.log(date)
    }

    useEffect(() => {
        fetch('http://localhost:4000/getAppointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate})
        })
            .then(res => res.json())
            .then(data => {
                setAppointment(data)
                console.log(data)
            })
    }, [selectedDate])

    return (
        <Container fluid={true} style={containerStyle}>
           <Row>
               <div className="col-md-2">
                    <Sidebar />
               </div>

                <div className="col-md-5">
                    <h2>Calendar</h2>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>

                <div className="col-md-5">
                    <AppointmentByDate appointment={appointment} />
                </div>
           </Row>
        </Container>
    );
};

export default DashBoard;