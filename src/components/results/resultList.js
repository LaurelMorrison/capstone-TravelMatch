import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactDOM from "react-dom";
import { getAnswersByUserId } from "../../modules/UserAnswerManager"
import {DestinationCard} from './resultCard'
import {getRankedLocation} from '../quiz/quizCalc'

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export const ResultList = () => {
    const [results, setResults] = useState([]);
    const query = useQuery()

    useEffect(() => {
        const userAnswerId = (query.get("userAnswerId"))
        getRankedLocation(userAnswerId).then((rankedLocationArray)=>{
            setResults(rankedLocationArray)
        })
    }, []);

    return (
        <>
           <div><h1>Your Top Destination Matches</h1></div>
           <div className="container-cards">
                {results.map(result =>

                    <DestinationCard
                        key={result.id}
                        result={result}
                    />)}
            </div>

        </>
    )
}