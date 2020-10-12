import React from 'react';
import {colors} from '../helpers/colors';

const CarList = ({amount}) => {
    return (
        <div className='car-list-container'>
            {[...Array(amount).keys()].map((i) => (
                <div className='car-list-text' style={{backgroundColor: colors[i]}} key={i}>
                    car {i + 1}
                </div>
            ))}
        </div>
    );
};

export default CarList;
