import React from "react";
import './trip.css'

export const TripCard = ({ result, handleDeleteTrip }) => {

    return (
        <div className="resultCard">
            {/* <div className="cardImage">
            <img className="destinationImg" src={trip.tripName} alt="destination picture"/>
            </div> */}
            <div>
                <h3>Name: {result.tripName}</h3>
                <p>Destination: {result.locationName}</p>
                <button type="button" className="deleteButton" onClick={() =>
                    handleDeleteTrip(result.id)}>Delete</button>
            </div>
        </div>
    )
}