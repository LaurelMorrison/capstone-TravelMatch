import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import {
    Button,
    LinearProgress,
} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import {
    fieldToTextField,
    TextField,
    TextFieldProps,
} from 'formik-material-ui';
import { DatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// import {
//     Autocomplete,
//     AutocompleteRenderInputParams,
// } from 'formik-material-ui-lab';
import Box from '@material-ui/core/Box';

export const TripChecklist = ({ result }) => (
    <Formik
        initialValues={{
            flightConfirmation: '',
            hotelConfirmation: '',
            arrivalDate: new Date(),
            departureDate: new Date(),
            packingList: [],
        }}

        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
            }, 500);
        }}
    >
        {({ submitForm, isSubmitting }) => (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="formBox">
                    <Form>
                        <h1>Trip Planning</h1>
                        <p>Start the planning process and enter the details here to have everything in one place.</p>
                        <div className="tripOverviewForm">
                            <h3>Trip Overview</h3>
                            {/* <p>Destination: {result.locationName}</p> */}
                            <Box margin={1}>
                                <label>Arrival Date: </label>
                                <Field
                                    component={DatePicker} name="arrivalDate" />
                            </Box>

                            <Box margin={1}>
                                <label>Departure Date: </label>
                                <Field component={DatePicker} name="departureDate" />
                            </Box>
                        </div>
                        <Box margin={1}>
                            <label>Flight Confirmation Number: </label>
                            <Field
                                component={TextField}
                                name="flightConfirmation"
                                type="flightConfirmation"
                            />
                        </Box>
                        <Box margin={1}>
                            <label>Hotel Confirmation Number: </label>
                            <Field
                                component={TextField}
                                name="hotelConfirmation"
                                type="hotelConfirmation"
                            />
                        </Box>
                        {/* {isSubmitting && <LinearProgress />} */}

                        {/* <Box margin={1}>
                        <Field
                            name="autocomplete"
                            multiple
                            component={Autocomplete}
                            options={top100Films}
                            getOptionLabel={(option: any) => option.title}
                            style={{ width: 300 }}
                            renderInput={(params: AutocompleteRenderInputParams) => (
                                <MuiTextField
                                    {...params}
                                    error={touched['autocomplete'] && !!errors['autocomplete']}
                                    helperText={touched['autocomplete'] && errors['autocomplete']}
                                    label="Autocomplete"
                                    variant="outlined"
                                />
                            )}
                        />
                    </Box> */}
                        <Box margin={1}>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Submit
              </Button>
                        </Box>
                    </Form>
                </div>
            </MuiPickersUtilsProvider>
        )}
    </Formik>
);

