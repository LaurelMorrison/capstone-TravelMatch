const remoteURL = "http://localhost:8088"

export const getAllTripPlanningLists = () => {
    return fetch(`${remoteURL}/TripPlanningLists`)
        .then(result => result.json())
};

export const getTripPlanningListById = (tripId) => {
    return fetch(`${remoteURL}/TripPlanningLists/?tripId=${tripId}`)
        .then(result => result.json())
        .then(result => result[0])
};

export const addNewPlan = (plan) => {
    return fetch(`${remoteURL}/TripPlanningLists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plan)
    }).then(result => result.json())
};