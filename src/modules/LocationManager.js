const remoteURL= "http://localhost:8088"

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
    .then(result => result.json())
};

export const getLocationByName = (name) => {
    return fetch(`${remoteURL}/locations?name=${name}`)
    .then(result => result.json())
};

export const getSingleLocation = (id) => {
    return fetch(`${remoteURL}/locations/${id}`)
    .then(res => res.json())
};