const remoteURL = "http://localhost:8088"
const currentUserId = sessionStorage.getItem("travelmatch_user")

export const getAllUserTrips = () => {
    return fetch(`${remoteURL}/userTrips`)
        .then(result => result.json())
};

export const getTripsByUserId = () => {
    return fetch(`${remoteURL}/userTrips?userId=${currentUserId}`)
        .then(result => result.json())
};

export const getTripById = (tripId) => {
    return fetch(`${remoteURL}/userTrips/${tripId}`)
        .then(result => result.json())
};


export const addNewTrip = (trip) => {
    return fetch(`${remoteURL}/userTrips`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trip)
    }).then(result => result.json())
};

export const deleteTrip = (id) => {
    return fetch(`${remoteURL}/userTrips/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
};

export const updateTrip = (editedTrip) => {
    return fetch(`${remoteURL}/userTrips/${editedTrip.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedTrip),
    }).then((data) => data.json());
};