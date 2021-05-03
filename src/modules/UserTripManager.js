const remoteURL = "http://localhost:8088"

const currentUser = parseInt(sessionStorage.getItem("travelmatch_user"));

export const getAllUserTrips = () => {
    return fetch(`${remoteURL}/userTrips`)
    .then(result => result.json())
};

export const getTripByUserId = (currentUser) => {
    return fetch(`${remoteURL}/userTrips/?currentUserId=${currentUser}&_expand=user`)
    .then(result => result.json())
};


export const addNewTrip = (trip) => {
    return fetch(`${remoteURL}/userTrips`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trip)
    }).then(response => response.json())
};