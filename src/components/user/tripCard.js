import React from "react";
import { useHistory } from 'react-router';
import './trip.css'
import Grid from '@material-ui/core/Grid'


export const TripCard = ({ result, handleDeleteTrip }) => {
    const history = useHistory();

    return (
        <div className="tripCard" >
            < Grid container justify="center" >
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
                        <button type="button" className="button" onClick={() => {
                            history.push(`/tripList?tripId=${result.id}`)
                        }}>Trip Details</button>
                        <button type="button" className="button" onClick={() =>
                            handleDeleteTrip(result.id)}>Delete</button>
                    </div>
                </Grid>
            </Grid >
        </div >
    )
}