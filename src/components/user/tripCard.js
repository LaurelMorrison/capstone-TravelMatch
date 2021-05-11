import React, { Component } from "react";
import './trip.css'
import Grid from '@material-ui/core/Grid'
import trash from "../../images/trash.png";
import packing from "../../images/packing.png";
import planning from "../../images/planning.png";


export const TripCard = ({ result, handleDeleteTrip }) => {

    return (
        <div className="tripCard" >
            {/* <div className="cardImage">
            <img className="destinationImg" src={trip.tripName} alt="destination picture"/>
            </div> */}
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
                    {/* <div>
                        <a href="/packingList"><img className="icon" src={packing} alt="packing list" /></a>
                    </div> */}
                    <div className="buttonSpotBox">
                        <form method="get" action="/packingList">
                            <button className="button" type="submit">Packing List</button>
                        </form>                        <button type="button" className="button" onClick={() =>
                            handleDeleteTrip(result.id)}>Delete</button>
                    </div>
                </Grid>
            </Grid >
        </div >
    )
}