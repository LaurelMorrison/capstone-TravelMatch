import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Box from '@material-ui/core/Box';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { useLocation, useParams } from 'react-router-dom';
import { PackingCheckboxList } from './packingChecklist';
import { ActivityList } from './activityPlanner';
import './trip.css'
import Grid from '@material-ui/core/Grid'
import { getTripById } from '../../modules/UserTripManager'
import airport from "../../images/airport.png";
import dog from "../../images/dog.png";
import { useHistory } from 'react-router';
import { addNewPlan } from "../../modules/TripPlanningManager"

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const activityTypes = {
    flight: 'flight',
    food: 'food',
    activity: 'activity',
    accomodation: 'accomodation'
}

const dayActivityMockData = [
    [
        {
            id: '1',
            activityType: activityTypes.flight,
            name: 'Flight from boston to mars',
            detail: 'Departs at 2am, arrives at 8pm',
            confirmationNumber: '123'
        },
        {
            id: '2',
            activityType: activityTypes.food,
            name: 'dinner at the airport',
            detail: 'Maybe Red Lobster?',
            confirmationNumber: '123'
        },
    ],
    [
        {
            id: '3',
            activityType: activityTypes.activity,
            name: 'Skydiving',
            detail: 'departs at 3pm',
            confirmationNumber: '123'
        },
        {
            id: '4',
            activityType: activityTypes.accomodation,
            name: '1 night at the Ritz',
            detail: 'Check-in is at 10am',
            confirmationNumber: '123'
        },
    ],
]

export const TripChecklist = () => {
    const query = useQuery()
    const [dates, setDates] = useState({
        startDate: null,
        endDate: null
    })
    const [currentTrip, setCurrentTrip] = useState({})
    const { tripId } = useParams();
    const [focusedInput, setFocusedInput] = useState(null);
    const history = useHistory();
    const getCurrentTrip = (id) => {
        return getTripById(id)
            .then(setCurrentTrip)
    }

    useEffect(() => {
        getCurrentTrip(tripId)
    }, [tripId])

    return (
        <Formik

            initialValues={{
                userId: parseInt(sessionStorage.getItem("travelmatch_user")),
                id: '',
                packingList: [],
                dayActivities: dayActivityMockData,
                tripId: tripId,
                name: currentTrip.tripName
                // startDate: dates.startDate,
                // endDate: dates.endDate
            }}


            onSubmit={(values) => {
                const tripId = Number(query.get("tripId"))
                setTimeout(() => {
                    values.startDate = dates.startDate.toISOString()
                    values.endDate = dates.endDate.toISOString()
                    addNewPlan(values)
                        .then((tripPlans) => {
                            history.push(`/tripPlans/${tripPlans.tripId}`)
                        })
                }, 500);

            }}
        >
            {({ submitForm, isSubmitting, values, setFieldValue }) => (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Form className="tripDetails">
                        < Grid container justify="center" >
                            <Grid item xs={12} >
                                <div className="tripPlanningHeader">
                                    <h1>Trip Planning</h1>
                                    <p>Start the planning process and enter the details here to have everything in one place.</p>
                                </div>
                            </Grid>
                            <Grid item xs={3} >
                                <img className="dog" src={dog} alt="dog" />
                            </Grid>
                            <Grid item xs={9} >
                                <div className="tripOverviewForm">
                                    <h2>Trip Overview</h2>
                                    <p> Trip Name: {currentTrip.tripName}</p>
                                    <p>Destination: {currentTrip.locationName}</p>
                                    <Box margin={0}>
                                        <div className="dateSelector">
                                            <label>Travel dates: </label>
                                            <DateRangePicker
                                                startDateId="startDate"
                                                endDateId="endDate"
                                                startDate={dates.startDate}
                                                endDate={dates.endDate}
                                                onDatesChange={({ startDate, endDate }) => setDates({ startDate, endDate })}
                                                focusedInput={focusedInput}
                                                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                                            />
                                        </div>
                                    </Box>
                                </div>
                            </Grid>
                            <br></br>
                            <Grid item xs={12} >
                                <div className="activityFormBox">
                                    <h2>Itinerary Planner</h2>
                                    <p>Start outlining your trip to track you plans on each day. Just add a card and move it from day-to-day.</p>
                                    <div>
                                        <ActivityList dayActivities={values.dayActivities} setDayActivities={(newval) => { setFieldValue('dayActivities', newval) }} />
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={8} >
                                <div className="packingForm">
                                    <h2>Packing List</h2>
                                    <PackingCheckboxList values={values} setFieldValue={setFieldValue}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={4} >
                                <img className="airport" src={airport} alt="airport" />
                            </Grid>
                            <Box margin={1}>
                                <button
                                    type="button"
                                    className="buttonLarge"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                    Submit
                            </button>
                            </Box>
                        </ Grid>
                    </Form>
                </MuiPickersUtilsProvider>
            )
            }
        </Formik >
    )
}

