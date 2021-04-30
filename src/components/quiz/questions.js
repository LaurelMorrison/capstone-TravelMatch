import React, { useState } from "react";
import { useHistory } from 'react-router';
import { addNewAnswers } from '../../modules/UserAnswerManager';
import "./quiz.css";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 150,
        margin: theme.spacing(3)
    },
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    }
}))

export const QuizQuestions = (question) => {
    const [isLoading, setIsLoading] = useState(false)
    const classes = useStyles();
    const history = useHistory();
    const [userAnswer, setUserAnswer] = React.useState({
        tripName: '',
        userId: parseInt(sessionStorage.getItem("travelmatch_user")),
        response1: '',
        response2: '',
        response3: '',
        response4: '',
        response5: '',
        response6: ''
    });

    const handleControlledInputChange = (event) => {
        const newUserAnswer = { ...userAnswer }
        console.log(event.target.name)
        let selectedVal = event.target.value
        newUserAnswer[event.target.name] = selectedVal
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
                    <FormControl>
                        <FormLabel htmlFor="tripName"> Name your trip: </FormLabel>
                        <TextField name="tripName" label="Trip Name" value={userAnswer.tripName} onChange={handleControlledInputChange} />
                    </FormControl>
                </div>
                <br />
                <div>
                    <p>1/6</p>
                    <FormControl component="fieldset">
                        <FormLabel htmlFor="response1" component="legend">Which acitvity is a must-do on your vacation:</FormLabel>
                        <RadioGroup className={classes.formControl} value={userAnswer.response1} onChange={handleControlledInputChange} name="response1">
                            <FormControlLabel control={<Radio />} value="hiking" id="hiking" label="Hiking" />
                            <FormControlLabel control={<Radio />} value="bungee" id="bungee" label="Bungee Jumping" />
                            <FormControlLabel control={<Radio />} value="beach" id="beach" label="Beach" />
                            <FormControlLabel control={<Radio />} value="cooking" id="cooking" label="Cooking Class" />
                            <FormControlLabel control={<Radio />} value="skiing" id="skiing" label="Skiing" />
                            <FormControlLabel control={<Radio />} value="vineyard" id="vineyard" label="Vineyard Visit" />
                            <FormControlLabel control={<Radio />} value="museum" id="museum" label="Cultural Museums" />
                            <FormControlLabel control={<Radio />} value="shopping" id="shopping" label="Shopping" />
                            <FormControlLabel control={<Radio />} value="bar" id="bar" label="Bar hopping" />
                            <FormControlLabel control={<Radio />} value="snorkling" id="snorkling" label="Snorkling" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <p>2/6</p>
                    <FormControl component="fieldset">
                        <FormLabel htmlFor="response2" component="legend">Which is your dream accomadation:</FormLabel>
                        <RadioGroup className={classes.formControl} value={userAnswer.response2} onChange={handleControlledInputChange} name="response2" >
                            <FormControlLabel control={<Radio />} value="boat" id="boat" label="On a boat" />
                            <FormControlLabel control={<Radio />} value="villa" id="villa" label="Local villa" />
                            <FormControlLabel control={<Radio />} value="apartment" id="apartment" label="City Apartment" />
                            <FormControlLabel control={<Radio />} value="resort" id="resort" label="All-inclusive Resort" />
                            <FormControlLabel control={<Radio />} value="bungalow" id="bungalow" label="Beach bungalow" />
                            <FormControlLabel control={<Radio />} value="hotel" id="hotel" label="Posh hotel" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <p>3/6</p>
                    <FormControl component="fieldset">
                        <FormLabel htmlFor="response3" component="legend">On a vacation, you want to be:</FormLabel>
                        <RadioGroup className={classes.formControl} value={userAnswer.response3} onChange={handleControlledInputChange} name="response3" >
                            <FormControlLabel control={<Radio />} value="relaxed" id="relaxed" label="Relaxed 24/7" />
                            <FormControlLabel control={<Radio />} value="adventure" id="adventure" label="On an adventure" />
                            <FormControlLabel control={<Radio />} value="learn" id="learn" label="Learning something new" />
                            <FormControlLabel control={<Radio />} value="party" id="party" label="A party animal" />
                            <FormControlLabel control={<Radio />} value="cultural" id="cultural" label="Celebrating other cultures" />
                            <FormControlLabel control={<Radio />} value="pampered" id="pampered" label="Getting pampered" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <p>4/6</p>
                    <FormControl component="fieldset">
                        <FormLabel htmlFor="response4" component="legend">What is your ideal temperature?</FormLabel>
                        <RadioGroup className={classes.formControl} value={userAnswer.response4} onChange={handleControlledInputChange} name="response4" >
                            <FormControlLabel control={<Radio />} value="snow" id="snow" label="Snow bunny" />
                            <FormControlLabel control={<Radio />} value="sweater" id="sweater" label="Sweater weather" />
                            <FormControlLabel control={<Radio />} value="moderate" id="moderate" label="Moderate is key" />
                            <FormControlLabel control={<Radio />} value="hot" id="hot" label="Hotter the better" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <p>5/6</p>
                    <FormControl component="fieldset">
                        <FormLabel htmlFor="response5" component="legend">On a vacation, you want to be:</FormLabel>
                        <RadioGroup className={classes.formControl} value={userAnswer.response5} onChange={handleControlledInputChange} name="response5" >
                            <FormControlLabel control={<Radio />} value="seafood" id="seafood" label="Seafood, please" />
                            <FormControlLabel control={<Radio />} value="healthy" id="healthy" label="Healthy is key" />
                            <FormControlLabel control={<Radio />} value="local" id="local" label="Local cuisine" />
                            <FormControlLabel control={<Radio />} value="restaurant" id="restaurant" label="5-Star restaurants" />
                            <FormControlLabel control={<Radio />} value="wine" id="wine" label="Anything with wine" />
                            <FormControlLabel control={<Radio />} value="cook" id="cook" label="I want to cook!" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <p>6/6</p>
                    <FormControl component="fieldset">
                        <FormLabel htmlFor="response6" component="legend">What is your trip budget?</FormLabel>
                        <RadioGroup className={classes.formControl} value={userAnswer.response6} onChange={handleControlledInputChange} name="response6" >
                            <FormControlLabel control={<Radio />} value="cheap" id="cheap" label="$" />
                            <FormControlLabel control={<Radio />} value="afforable" id="afforable" label="$$" />
                            <FormControlLabel control={<Radio />} value="lavish" id="lavish" label="$$$" />
                            <FormControlLabel control={<Radio />} value="expensive" id="expensive" label="$$$$" />
                        </RadioGroup>
                    </FormControl>
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