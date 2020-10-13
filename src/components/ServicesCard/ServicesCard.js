import React from 'react';
import './service-style.css'

const ServicesCard = (props) => {
    const {title, description, icon} = props.service
    return (
        <div className="col-md-4 ">
            <div className={`d-flex flex-column align-items-center text-center service-container`}>
                <div className="mb-3">
                    <img src={icon} alt=""/>
                </div>

                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;