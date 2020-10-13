import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './infocard-style.css'

const InfoCard = (props) => {
    const {title, description, icon , backgroundColor } = props.info;
    return (
        <div className="col-md-4 ">
            <div className={`d-flex justify-content-center align-items-center info-${backgroundColor} container-box`}>
                <div className="mr-3">
                    <FontAwesomeIcon className="icon-size" icon={icon} />
                </div>
                
               <div>
                    <h6>{title}</h6>
                    <small>{description}</small>
               </div>
            </div>
        </div>
    );
};

export default InfoCard;