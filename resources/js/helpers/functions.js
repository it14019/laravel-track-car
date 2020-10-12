export const roundNumber = value => {
    return value.toFixed(6);
};

export const randomLatitude = () => {
    let minLat = 56.303437;
    let maxLat = 58.036318;
    return Math.random() * (maxLat - minLat) + minLat;
};

export const randomLongitude = () => {
    let minLng = 21.203142;
    let maxLng = 27.794393;
    return Math.random() * (maxLng - minLng) + minLng;
};

