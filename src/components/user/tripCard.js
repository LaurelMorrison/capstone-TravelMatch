import React from "react";
import './trip.css'
// import Grid from '@material-ui/core/Grid'

export const TripCard = ({ result, handleDeleteTrip }) => {

    return (
        <div className="tripCard">
            {/* <div className="cardImage">
            <img className="destinationImg" src={trip.tripName} alt="destination picture"/>
            </div> */}
            <div>
                <h3>Trip: {result.tripName}</h3>
                <p>Destination: {result.locationName}</p>
                <div className="cardImage">
                    <img className="tripImg" src={result.locationImage} alt="destination" />
                </div>
                <div className="buttonSpotBox">
                    <button type="button" className="deleteButton" onClick={() =>
                        handleDeleteTrip(result.id)}>Delete</button>
                </div>
            </div >
        </div >
    )
}