import React, { useState } from "react";
import { useHistory } from 'react-router';
import "./result.css"
import {addNewTrip} from "../../modules/UserTripManager"


export const DestinationCard = ({result}) => {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();

    const [userTrip, setUserTrip] = React.useState({
        tripName: '',
        userId: parseInt(sessionStorage.getItem("travelmatch_user")),
        locationName: '',
    });

    const handleClickAddTrip = (event) => {
        event.preventDefault()
        setIsLoading(true)
        addNewTrip(userTrip)
            .then(history.push("/trips"))
    }

    return(
        <div className="resultCard">
            <div className="cardImage">
            <img className="destinationImg" src={result.locationImage} alt="destination"/>
            </div>
            <div>
            <h3>Name: {result.locationName}</h3>
            <p>{result.locationDescription}</p>

            <button
            type="submit"
            onClick={handleClickAddTrip}
            disabled={isLoading}>
            This is the spot!</button>
            </div>
        </div>
    )
}