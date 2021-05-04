import React, { useState } from "react";
import { useHistory } from 'react-router';
import "./result.css"
import { addNewTrip } from "../../modules/UserTripManager"


export const DestinationCard = ({ result }) => {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();

    const handleClickAddTrip = (event) => {
        event.preventDefault()
        console.log(event)
        setIsLoading(true)
        addNewTrip(result)
            .then(history.push("/trips"))
    }

    return (
        <div className="resultCard">
            <div className="cardImage">
                <img className="destinationImg" src={result.locationImage} alt="destination" />
            </div>
            <div className="locationCardContent">
                <h3>Name: {result.locationName}</h3>
                <p>{result.locationDescription}</p>

                <button
                    type="submit"
                    id={result.id}
                    className="spotButton"
                    onClick={handleClickAddTrip}
                    disabled={isLoading}>
                    This is the spot!</button>
            </div>
        </div>
    )
}