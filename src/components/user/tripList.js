import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { getTripByUserId } from "../../modules/UserTripManager"
import {TripCard} from './tripCard'

export const TripList = () => {
    const [trips, setTrips] = useState([]);

    const loggedInUser = sessionStorage.getItem("travelmatch_user")
    const getLoggedInTrips = () => {
    return getTripByUserId(loggedInUser)
    .then(trips => {
        setTrips(trips)
    })
 }
    useEffect(() => {
        getLoggedInTrips();
    }, []);

    return (
        <>
           <div><h1>Your Upcoming Trips</h1></div>
           <div className="container-cards">
                {trips.map(trip =>

                    <TripCard
                        key={trip.id}
                        result={trip}
                    />)}
            </div>

        </>
    )
}