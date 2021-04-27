import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { getAnswersByUserId } from "../../modules/UserAnswerManager"
import {TripCard} from './resultCard'

const currentUser = sessionStorage.getItem("travelmatch_user")

export const ResultList = () => {
    const [results, setResults] = useState([]);


    const loggedInUser = sessionStorage.getItem("travelMatch_user")
    const getLoggedInAnswers = () => {
        return getAnswersByUserId(loggedInUser)
            .then(results => {
                setResults(results)
            })
    }

    useEffect(() => {
        getLoggedInAnswers();
    }, []);

    return (
        <>
            <div className="container-cards">
                {results.map(result =>

                    <TripCard
                        key={result.id}
                        result={result}
                    />)}
            </div>

        </>
    )
}