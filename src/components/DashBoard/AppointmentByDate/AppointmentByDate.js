import React from 'react';

const AppointmentByDate = ({ appointment}) => {
    console.log(appointment)
    return (
        <div>
            <h2>Total Appointmen : {appointment.length}</h2>
            {
                appointment.map(appnt => <li key={appnt._id}> {appnt.name} </li> )
            }
        </div>
    );
};

export default AppointmentByDate;