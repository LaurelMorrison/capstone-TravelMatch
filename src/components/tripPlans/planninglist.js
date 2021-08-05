import React, { useState, useEffect } from 'react';
import "./planningList.css";
import { useParams } from 'react-router-dom';
import { getTripPlanningListById } from '../../modules/TripPlanningManager';
import { getTripById } from '../../modules/UserTripManager'
import Printer, { print } from 'react-pdf-print'

const ids = ['1']
const tabStyle = {
    height: 1800,
    maxHeight: 1800,
    overflow: "scroll",
    padding: '50px'
};

export const PlanningList = () => {
    const [tripPlan, setTripPlan] = useState(null)
    const { tripId } = useParams();
    const [currentTrip, setCurrentTrip] = useState({})

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const getCurrentTrip = (id) => {
        return getTripById(id)
            .then(setCurrentTrip)
    }

    const getCurrentTripPlan = (id) => {
        return getTripPlanningListById(id)
            .then(setTripPlan)
    }

    useEffect(() => {
        getCurrentTrip(tripId)
        getCurrentTripPlan(tripId)
    }, [tripId])

    return (
        <div className="tripPlanList" style={tabStyle}>
            {
                tripPlan && (
                    <>
                        <div>
                            <input type='button' className="buttonLarge"
                                onClick={() => print(ids)} value='Print Trip Plans' />
                        </div>
                        <Printer>
                            <div id={ids[0]} style={{ width: '250mm', height: '320mm', padding: '20px', align: 'top' }}>
                                <div className="TripDetailOverview" >
                                    <h2>Trip Overview</h2>
                                    <p> Trip Name: {currentTrip.tripName}</p>
                                    <p>Destination: {currentTrip.locationName}</p>
                                    <p>Travel Dates: {formatDate(tripPlan.startDate)} - {formatDate(tripPlan.endDate)}</p>
                                </div>
                                <hr></hr>
                                <div className="TripDetailItinerary">
                                    <h2>Itinerary</h2>
                                    {tripPlan.dayActivities.map((day, i) => (
                                        <>
                                            <h4>Day {i + 1}</h4>
                                            {
                                                day.map(activity => (
                                                    <ul>
                                                        <li>{activity.name}</li>
                                                        <ul>
                                                            <li>Details: {activity.detail}</li>
                                                            <li>Confirmation Number: {activity.confirmationNumber}</li>
                                                        </ul>
                                                    </ul>
                                                ))
                                            }
                                        </>
                                    ))}
                                </div>
                                <hr></hr>
                                <div className="TripDetailPacking">
                                    <h2>Packing Checklist</h2>

                                    {tripPlan.packingList.map(packingListItem => (
                                        <>
                                            <form>
                                                <ul className="packingListColumn">
                                                    <div className="checkboxList"> <input type="checkbox" value="{packingListItem}" className="checkBoxIcon" /><li>{packingListItem}</li></div>
                                                </ul>
                                            </form>
                                        </>
                                    ))}
                                </div>
                                <br></br>
                            </div>
                        </Printer>
                    </>
                )
            }
        </div >
    )
}