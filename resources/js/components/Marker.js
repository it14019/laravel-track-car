import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCarSide} from '@fortawesome/free-solid-svg-icons';
import {roundNumber} from '../helpers/functions';

const Marker = ({color, isVisible, car, lat, lng, handleClick}) => {

    return (
        <div>
            <div className={isVisible ? 'info-window' : 'info-window-hidden'}>
                Car {car} Location: {roundNumber(lat)}, {roundNumber(lng)}
            </div>
            <FontAwesomeIcon className='marker-icon' onClick={handleClick} icon={faCarSide} color={color} size={'lg'}/>
        </div>
    );
};

export default Marker;
