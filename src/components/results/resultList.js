import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactDOM from "react-dom";
import { getAnswersByUserId } from "../../modules/UserAnswerManager"
import {TripCard} from './resultCard'
import {getRankedLocation} from '../quiz/quizCalc'

const currentUser = sessionStorage.getItem("travelmatch_user")
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