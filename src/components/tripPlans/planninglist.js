import React, { useState, useEffect } from 'react';
import "./planningList.css";
import { useParams } from 'react-router-dom';
import { getTripPlanningListById } from '../../modules/TripPlanningManager';

export const PlanningList = () => {
    const [tripPlan, setTripPlan] = useState()
    const { tripId } = useParams();

    console.log(tripId)

    const getCurrentTripPlan = (id) => {
        return getTripPlanningListById(id)
            .then(setTripPlan)
    }

    useEffect(() => {
        getCurrentTripPlan(tripId)
    }, [tripId])

    return (
        <div className="tripPlanList" >
            <p>Hey</p>

        </div>
    )
}