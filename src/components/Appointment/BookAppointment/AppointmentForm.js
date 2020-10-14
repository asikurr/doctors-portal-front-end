import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ appointmentOn, modalIsOpen, closeModal, date }) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        
        data.service = appointmentOn;
        data.date = date;
        data.CreateAt = new Date();

        fetch('http://localhost:4000/addAppointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                closeModal()
            }
        })
        
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >


                <div className="form-group text-right">
                    <button onClick={closeModal} type="submit" className="btn btn-danger">close</button>
                </div>
                <h4 className="text-brand mb-3">{appointmentOn}</h4>
                <p className="text-secondary">Appointment On <small>{date.toDateString()}</small> </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Enter Your Name" className="form-control" ref={register({ required: true })} />
                        {errors.name && <span className="text-danger">Name is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Enter Your Email" className="form-control" ref={register({ required: true })} />
                        {errors.email && <span className="text-danger">Email is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="number" name="phoneNumber" placeholder="Enter Your Phone Number" className="form-control" ref={register({ required: true })} />
                        {errors.phoneNumber && <span className="text-danger">Phone Number is required</span>}
                    </div>

                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;