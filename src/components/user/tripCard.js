import React from "react";
import './trip.css'
import Grid from '@material-ui/core/Grid'

export const TripCard = ({ result, handleDeleteTrip }) => {

    return (
        <div className="tripCard">
            {/* <div className="cardImage">
            <img className="destinationImg" src={trip.tripName} alt="destination picture"/>
            </div> */}
            <Grid container justify="center">
                <Grid item xs={12} >
                    <h3>Trip: {result.tripName}</h3>
                    <p>Destination: {result.locationName}</p>
                    <p>Trip Type: {result.tripType}</p>
                    <div className="cardImage">
                        <img className="tripImg" src={result.locationImage} alt="destination" />
                    </div>
                </Grid>
                <Grid item xs={12} >
                    <div className="buttonSpotBox">
                        <button type="button" className="deleteButton" onClick={() =>
                            handleDeleteTrip(result.id)}>Delete</button>
                    </div>
                </Grid>
            </Grid >
        </div >
    )
}