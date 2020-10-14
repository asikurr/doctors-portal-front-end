import React from 'react';
import { Link } from 'react-router-dom';
import AddDoctors from '../AddDoctors/AddDoctors';

const Sidebar = () => {
    return (
        <div>
            <h4>Sidebar</h4>

            <Link to="/addDoctors">
                <button className="btn btn-primary">Add Doctors</button>
            </Link>
        </div>
    );
};

export default Sidebar;