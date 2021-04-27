import React from "react"
import { Link } from "react-router-dom";

export const TripCard = ({location}) => {
    return(
        <div className="resultCard">
            <h3>Name: {location.name}</h3>
            <p>Description: {location.description}</p>
            <div className="cardImage">
                {location.image}
            </div>
            <button>Learn More</button>
            <button>Pick Spot!</button>
        </div>
    )
}