import React from "react";


export const TripCard = ({trip}) => {

    return(
        <div className="resultCard">
            <div className="cardImage">
            <img className="destinationImg" src={trip.tripName} alt="destination picture"/>
            </div>
            <div>
            <h3>Name: {trip.tripName}</h3>
            <p>Destination: {trip.locationName}</p>
            </div>
        </div>
    )
}