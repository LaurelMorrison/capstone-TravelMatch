import React, { useState, useEffect } from 'react';
import { getTripsByUserId, deleteTrip } from "../../modules/UserTripManager"
import { TripCard } from './tripCard'
import './trip.css'

export const TripList = () => {
    const [trips, setTrips] = useState([]);

    const getLoggedInTrips = () => {
        return getTripsByUserId()
            .then(tripsFromApi => {
                setTrips(tripsFromApi)
            })
    }

    const handleDeleteTrip = id => {
        deleteTrip(id)
            .then(() => getTripsByUserId().then(setTrips));
    };

    useEffect(() => {
        getLoggedInTrips();
    }, []);

    return (
        <>
            <div className="tripHeader"><h1>Your Upcoming Trips</h1></div>
            <div className="container-cards">
                {trips.map(trip =>

                    <TripCard
                        key={trip.id}
                        result={trip}
                        handleDeleteTrip={handleDeleteTrip}
                        user={trip.user}
                    />)}
            </div>

        </>
    )
}