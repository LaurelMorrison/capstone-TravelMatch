import React, { useState } from "react"
import { useHistory } from 'react-router';
import { addNewAnswers } from '../../modules/UserAnswerManager'
import "./quiz.css";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


function valueTemp(value) {
    return `${value}`;
}

function valueBudget(value) {
    return `${value}`;
}

const budgetMarks = [
    {
        value: 1,
        label: "Budget Friendly"
    },
    {
        value: 10,
        label: "Spare No Expense"
    }
]

const weatherMarks = [
    {
        value: 1,
        label: "Snow Bunny"
    },
    {
        value: 10,
        label: "Hotter the Better"
    }
]

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 150
    }
}))


export const QuizQuestions = (questions) => {
    // const tripType = ['Couples Retreat', 'Family Vacay', 'Friends Trip', 'Solo Adventure']
    // const defaultType = tripType[0];

    const [isLoading, setIsLoading] = useState(false)
    const classes = useStyles();
    const [userAnswer, setUserAnswer] = useState({
        tripName: '',
        tripType: '',
        tripMonth: '',
        userId: parseInt(sessionStorage.getItem("travelmatch_user")),
        response1: '',
        response2: '',
        response3: '',
        response4: 5,
        response5: '',
        response6: 5
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newUserAnswer = { ...userAnswer }
        console.log({ ...userAnswer })
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        console.log(newUserAnswer)
        newUserAnswer[event.target.tripType] = selectedVal
        setUserAnswer(newUserAnswer)
    }

    const handleClickSaveAnswer = (event) => {
        event.preventDefault()
        setIsLoading(true)
        addNewAnswers(userAnswer)
            .then(() => history.push("/results"))
    }


    return (
        <div>
            <div>
                <h1>Get started!</h1>
                <h4>Answer the questions below and get matched with your dream destination.</h4>
            </div>
            <form id="form1">
                <div>
                    <fieldset>
                        <label htmlFor="tripName">Name your trip: <input value={userAnswer.tripName} type="text" name="name" id="tripName" onChange={handleControlledInputChange} /></label>
                    </fieldset>
                    <fieldset>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="tripType">Type of trip: </InputLabel>
                            <Select name="typeDropdown" value={userAnswer.tripType} onChange={handleControlledInputChange} required >
                                <MenuItem value={"Couples Retreat"} >Couple's Retreat</MenuItem>
                                <MenuItem value={"Family Vacay"}  >Family Vacay</MenuItem>
                                <MenuItem value={"Friends Trip"}  >Friends Trip</MenuItem>
                                <MenuItem value={"Solo Adventure"} >Solo Adventure</MenuItem>
                            </Select>
                            {/* <Dropdown options={tripType} onChange={this._onSelect} value={defaultType} placeholder="Select an option" /> */}
                        </FormControl>
                    </fieldset>
                    <fieldset>
                        <FormControl className={classes.formControl}>
                            <InputLabel> Month of trip: </InputLabel>
                            <Select htmlFor="tripMonth" name="monthDropdown" onChange={handleControlledInputChange} >
                                <MenuItem value="January">January</MenuItem>
                                <MenuItem value="February">February</MenuItem>
                                <MenuItem value="March">March</MenuItem>
                                <MenuItem value="April">April</MenuItem>
                                <MenuItem value="May">May</MenuItem>
                                <MenuItem value="June">June</MenuItem>
                                <MenuItem value="July">July</MenuItem>
                                <MenuItem value="August">August</MenuItem>
                                <MenuItem value="September">September</MenuItem>
                                <MenuItem value="October">October</MenuItem>
                                <MenuItem value="November">November</MenuItem>
                                <MenuItem value="December">Decemeber</MenuItem>
                            </Select>
                        </FormControl>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <p>1/6</p>
                        <label htmlFor="response1">Pick your top 3 activities</label>
                        {/* <h4>{questions[0].questionText}</h4>
                    {questions[0].answerOptions.map((answerOptions)=>(<button>{answerOptions.answerText}</button>))} */}
                        <button><option type="vacation" name="activities" onChange={handleControlledInputChange} id="Hiking" value="adventure" />Hiking</button>
                        <button><option type="vacation" name="activities" onChange={handleControlledInputChange} id="BungeeJumping" value="adventure" />Bungee Jumping</button>
                        <button><option type="vacation" name="activities" onChange={handleControlledInputChange} id="Beach" value="beach" />Beach</button>
                        <button><option type="vacation" name="activities" onChange={handleControlledInputChange} id="Cooking" value="cultural" />Cooking Class</button>
                        <button><option type="vacation" name="activities" onChange={handleControlledInputChange} id="Skiing" value="mountain" />Skiing</button>
                        <button><option type="vacation" name="activities" onChange={handleControlledInputChange} id="Vineyard" value="pampered" />Vineyard Visit</button>
                        <button><option type="vacation" name="activities" onChange={handleControlledInputChange} id="Museum" value="cultural" />Cultural Museums</button>
                        <button><option type="vacation" name="activities" onChange={handleControlledInputChange} id="Shopping" value="pampered" />Shopping</button>
                        <button><option type="vacation" name="activities" onChange={handleControlledInputChange} id="Bar" value="party" />Bar hopping</button>
                        <button><option type="vacation" name="activities" onChange={handleControlledInputChange} id="Snorkling" value="beach" />Snorkling</button>
                        {/* <button><option type="vacation" name="activities" id={buttonId} value={buttonValue} />Bar hopping</button> */}
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <p>2/6</p>
                        <label htmlFor="response2">Dream Accomodations</label>
                        <button><option type="vacation" name="accomodations" onChange={handleControlledInputChange} id="Boat" value="adventure" />On a boat</button>
                        <button><option type="vacation" name="accomodations" onChange={handleControlledInputChange} id="Villa" value="cultural" />Local villa</button>
                        <button><option type="vacation" name="accomodations" onChange={handleControlledInputChange} id="Apartment" value="party" />City Apartment</button>
                        <button><option type="vacation" name="accomodations" onChange={handleControlledInputChange} id="Resort" value="pampered" />All-inclusive Resort</button>
                        <button><option type="vacation" name="accomodations" onChange={handleControlledInputChange} id="Bungalow" value="beach" />Beach bungalow</button>
                        <button><option type="vacation" name="accomodations" onChange={handleControlledInputChange} id="Hotel" value="snow" /> Posh hotel</button>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <p>3/6</p>
                        <label htmlFor="response3">On a vacation, you want to be:</label>
                        <button><option type="vacation" name="mood" onChange={handleControlledInputChange} id="Relaxed" value="beach" />Relaxed 24/7</button>
                        <button><option type="vacation" name="mood" onChange={handleControlledInputChange} id="Adventure" value="adventure" />On an adventure</button>
                        <button><option type="vacation" name="mood" onChange={handleControlledInputChange} id="Learning" value="snow" />Learning something new</button>
                        <button><option type="vacation" name="mood" onChange={handleControlledInputChange} id="Party" value="party" />A party animal</button>
                        <button><option type="vacation" name="mood" onChange={handleControlledInputChange} id="Cultures" value="cultural" />Celebrating other cultures</button>
                        <button><option type="vacation" name="mood" onChange={handleControlledInputChange} id="Pampered" value="pampered" />Getting pampered</button>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <p>4/6</p>
                        <label htmlFor="response4">What is your ideal temperature?</label>
                        <Slider
                            className="tempSlider"
                            defaultValue={5}
                            // value={userAnswer.response4} 
                            // id="response4"
                            onChange={handleControlledInputChange} required
                            getAriaValueText={valueTemp}
                            aria-labelledby="discrete-slider-custom"
                            min={1}
                            max={10}
                            valueLabelDisplay="auto"
                            marks={weatherMarks}
                        />
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <p>5/6</p>
                        <label htmlFor="response5">On a vacation, you want to be:</label>
                        <button><option type="vacation" onChange={handleControlledInputChange} name="food" id="Seafood" value="beach" />Seafood, please</button>
                        <button><option type="vacation" onChange={handleControlledInputChange} name="food" id="Healthy" value="snow" />Healthy is key</button>
                        <button><option type="vacation" onChange={handleControlledInputChange} name="food" id="Local" value="cultural" />Local cuisine</button>
                        <button><option type="vacation" onChange={handleControlledInputChange} name="food" id="Fancy" value="pampered" />5-Star restaurants</button>
                        <button><option type="vacation" onChange={handleControlledInputChange} name="food" id="Wine" value="party" />Anything with wine</button>
                        <button><option type="vacation" onChange={handleControlledInputChange} name="food" id="Cook" value="adventure" />I want to cook!</button>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <p>6/6</p>
                        <label htmlFor="response6">What is your trip budget?</label>
                        <Slider
                            className="budgetSlider"
                            onChange={handleControlledInputChange} required
                            defaultValue={5}
                            // value={userAnswer.response6} 
                            // id="response6"
                            getAriaValueText={valueBudget}
                            aria-labelledby="discrete-slider-small-steps"
                            min={1}
                            max={10}
                            marks={budgetMarks}
                            valueLabelDisplay="auto"
                        />
                    </fieldset>
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={handleClickSaveAnswer}
                        disabled={isLoading}>
                        Submit</button>
                </div>
            </form>
        </div>
    )
}

export default QuizQuestions;