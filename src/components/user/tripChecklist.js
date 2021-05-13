import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Box from '@material-ui/core/Box';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { useLocation } from 'react-router-dom';
import { PackingCheckboxList } from './packingChecklist'


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const TripChecklist = () => {
    const query = useQuery()
    const [dates, setDates] = useState({
        startDate: null,
        endDate: null
    })
    const [focusedInput, setFocusedInput] = useState(null);

    return (
        <Formik

            initialValues={{
                flightConfirmation: '',
                hotelConfirmation: '',
                hotelDetails: '',
                options: []
            }}

            onSubmit={(values, { setSubmitting }) => {
                const tripId = Number(query.get("tripId"))
                setTimeout(() => {
                    setSubmitting(false);
                    values.startDate = dates.startDate.toISOString()
                    values.endDate = dates.endDate.toISOString()
                    console.log("value", { ...values, tripId })
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Form className="tripDetails">
                        <h1>Trip Planning</h1>
                        <p>Start the planning process and enter the details here to have everything in one place.</p>
                        <div className="tripOverviewForm">
                            <h3>Trip Overview</h3>
                            {/* <p>Destination: {result.locationName}</p> */}
                            <Box margin={1}>
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
                        <br></br>
                        <div className="travelForm">
                            <h3>Travel Details</h3>
                            <Box margin={1}>
                                <label>Travel Confirmation Number: </label>
                                <Field
                                    component={TextField}
                                    name="flightConfirmation"
                                    type="flightConfirmation"
                                />
                            </Box>
                        </div>
                        <br></br>
                        <div className="accomodationsForm">
                            <h3>Accomodations Details</h3>
                            <Box margin={1}>
                                <label>Accomodation details: </label>
                                <Field
                                    component={TextField}
                                    name="hotelDetails"
                                    type="hotelDetails"
                                />
                            </Box>
                            <Box margin={1}>
                                <label>Accomodation Confirmation Number: </label>
                                <Field
                                    component={TextField}
                                    name="hotelConfirmation"
                                    type="hotelConfirmation"
                                />
                            </Box>
                        </div>
                        <br></br>
                        <div className="activityForm">
                            <h3>Activities Details</h3>
                            <Box margin={1}>
                            </Box>
                        </div>
                        <br></br>
                        <div className="packingForm">
                            <h3>Packing Checklist</h3>
                            <PackingCheckboxList
                            />
                        </div>
                        <br></br>
                        <Box margin={1}>
                        </Box>
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
                    </Form>
                </MuiPickersUtilsProvider>
            )
            }
        </Formik >
    )
}

