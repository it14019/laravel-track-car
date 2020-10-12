import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import CarList from './CarList';
import Marker from './Marker';
import {colors} from '../helpers/colors';
import {locations} from '../helpers/locations';
import {center} from '../helpers/center';
import {randomLatitude, randomLongitude} from '../helpers/functions';
import BackButton from "./BackButton";

const Map = ({amount}) => {

    const [location, setLocation] = useState(locations);
    const [isVisible, setVisible] = useState(false);

    const loadRef = useRef();

    useEffect(() => {
        loadRef.current = goToDestination;
    });

    useEffect(() => {
        const load = () => {
            loadRef.current();
        };

        const onLoad = window.addEventListener('load', load);

        return () => {
            window.removeEventListener('load', onLoad);
        };
    }, []);

    const randomLocationArray = [];

    const goToDestination = () => {
        for (let i = 0; i < amount; i++) {
            const stepLat = (randomLatitude() - location[i].latitude) / 100;
            const stepLng = (randomLongitude() - location[i].longitude) / 100;

            randomLocationArray.push([stepLat, stepLng]);
        }
        moveMarker();
    };

    function moveMarker() {
        for (let i = 0; i < amount; i++) {
            const currentLat = location[i].latitude -= randomLocationArray[i][0];
            const currentLng = location[i].longitude += randomLocationArray[i][1];
            setLocation({...location, latitude: currentLat, longitude: currentLng});
        }
        setTimeout(moveMarker, 2000);
    }

    const showInfoWindow = () => {
        setVisible(!isVisible);
    };

    return (
        <div className='map-container'>
            <div className='left-side'>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyAOKVx5uk9LReKamBQ4d0apTRWpvbeHwS0'}}
                    defaultCenter={center}
                    defaultZoom={7}
                >
                    {[...Array(amount).keys()].map((i) => (
                        <Marker key={i}
                                lat={location[i].latitude}
                                lng={location[i].longitude}
                                color={colors[i]}
                                car={i + 1}
                                isVisible={isVisible}
                                handleClick={showInfoWindow}
                        />
                    ))}
                </GoogleMapReact>
            </div>

            <div className='right-side'>
                {!amount ? (<p>No vehicles to show</p>) : (<CarList amount={amount}/>)}
                <BackButton/>
            </div>

        </div>
    );
};

export default Map;

if (document.getElementById('map')) {
    let stringValue = document.getElementById('map')
        .getAttribute('car-amount');
    let value = Number(stringValue);
    ReactDOM.render(<Map amount={value}/>, document.getElementById('map'));
}
