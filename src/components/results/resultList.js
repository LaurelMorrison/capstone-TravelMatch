import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DestinationCard } from './resultCard';
import { getRankedLocation } from '../quiz/quizCalc';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const ResultList = () => {
    const [results, setResults] = useState([]);
    const query = useQuery()

    useEffect(() => {
        const userAnswerId = (query.get("userAnswerId"))
        getRankedLocation(userAnswerId).then((rankedLocationArray) => {
            setResults(rankedLocationArray)
        })
    }, []);

    return (
        <div className="destinationList" >
            <div className="destinationHeader"><h1>Your Top Destination Matches</h1></div>
            <div className="container-cards">
                {results.map(result =>

                    <DestinationCard
                        id={result.id}
                        result={result}
                        user={result.user}
                    />)}
            </div>

        </div>
    )
}