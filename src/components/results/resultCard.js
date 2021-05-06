import React, { useState } from "react";
import { useHistory } from 'react-router';
import "./result.css"
import Grid from '@material-ui/core/Grid'
import { addNewTrip } from "../../modules/UserTripManager"


export const DestinationCard = ({ result }) => {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();

    const handleClickAddTrip = (event) => {
        event.preventDefault()
        setIsLoading(true)
        addNewTrip(result)
            .then(history.push("/trips"))
    }

    return (
        <div className="resultCard">
            <Grid container justify="center">
                <Grid item xs={3} >
                    <div className="cardImage">
                        <img className="destinationImg" src={result.locationImage} alt="destination" />
                    </div>
                </Grid>
                <Grid item xs={9} >
                    <div className="locationCardContent">
                        <h3>Name: {result.locationName}</h3>
                        <p>{result.locationDescription}</p>
                        <p>Top activities: {result.locationActivities}</p>
                        <p>Best time to visit: {result.locationTime}</p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="buttonSpotBox">
                        <button
                            type="submit"
                            id={result.id}
                            className="spotButton"
                            onClick={handleClickAddTrip}
                            disabled={isLoading}>
                            This is the spot!</button>
                    </div>
                </Grid>
            </Grid>
        </div >
    )
}