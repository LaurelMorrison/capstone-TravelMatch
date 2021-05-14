const remoteURL = "http://localhost:8088"

export const getAllTripPlanningLists = () => {
    return fetch(`${remoteURL}/TripPlanningLists`)
        .then(result => result.json())
};

export const getTripPlanningListById = (id) => {
    return fetch(`${remoteURL}/TripPlanningLists/${id}`)
        .then(result => result.json())
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