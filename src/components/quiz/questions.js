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
import family from "../../images/family.png";
import solo from "../../images/solo.png";
import hike from "../../images/hike.png";
import swim from "../../images/swim.png";
import beach from "../../images/beach.png";
import quiz1 from "../../images/quiz1.png";
import quiz2 from "../../images/quiz2.png";
import quiz3 from "../../images/quiz3.png";
import { Grid } from "@material-ui/core";

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



const callback = function (entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-visible");
    });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function (target) {
    observer.observe(target);
});

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
        let selectedVal = event.target.value
        newUserAnswer[event.target.name] = selectedVal
        setUserAnswer(newUserAnswer)
    }

    const handleClickSaveAnswer = (event) => {
        event.preventDefault()
        setIsLoading(true)
        addNewAnswers(userAnswer)
            .then((resultingAnswer) => {
                history.push(`/results?userAnswerId=${resultingAnswer.id}`)
            })
    }


    return (
        <Grid container justify="center">
            <Grid item xs={7}>
                <div className="topQuiz">
                    <div className="getStartedBox">
                        <h1>Get started!</h1>
                        <p className="subheadQuiz">Answer the questions below and get matched with your dream destination.</p>
                    </div>
                    <div className="tripNameBox">
                        <label htmlFor="tripName"> Name your trip: </label>
                        <input name="tripName" type="text" value={userAnswer.tripName} onChange={handleControlledInputChange} required />
                    </div>
                    <div className="tripTypeBox">
                        <label htmlFor="tripType">Type of trip: </label>
                        <select className="typeDropdown" name="tripType" value={userAnswer.tripType} onChange={handleControlledInputChange}>
                            <option value="" defaultValue disabled hidden>Choose a trip type</option>
                            <option className="dropdown" value="Couples Retreat" >Couple's Retreat</option>
                            <option className="dropdown" value="Family Vacay"  >Family Vacay</option>
                            <option className="dropdown" value="Friends Trip"  >Friends Trip</option>
                            <option className="dropdown" value="Solo Adventure" >Solo Adventure</option>
                        </select>
                    </div>
                </div>
            </Grid>
            <br />

            <Grid item xs={5}>
                <img className="family" src={family} alt="family" />
            </Grid>
            <Grid item xs={3}>
                <img className="quiz1" src={quiz1} alt="blob" />
            </Grid>
            <Grid item xs={9}>
                <div>
                    <p>1/6</p>
                    <FormControl component="fieldset">
                        <FormLabel htmlFor="response1" component="legend">Which acitvity is a must-do on your vacation:</FormLabel>
                        <RadioGroup className={classes.formControl} value={userAnswer.response1} onChange={handleControlledInputChange} required name="response1">
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs={6}>
                                    <div className="question1Answers">
                                        <FormControlLabel control={<Radio />} value="hiking" id="hiking" label="Hiking" />
                                        <FormControlLabel control={<Radio />} value="bungee" id="bungee" label="Bungee Jumping" />
                                        <FormControlLabel control={<Radio />} value="beach" id="beach" label="Beach" />
                                        <FormControlLabel control={<Radio />} value="cooking" id="cooking" label="Cooking Class" />
                                        <FormControlLabel control={<Radio />} value="skiing" id="skiing" label="Skiing" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="question1Answers">
                                        <FormControlLabel control={<Radio />} value="vineyard" id="vineyard" label="Vineyard Visit" />
                                        <FormControlLabel control={<Radio />} value="museum" id="museum" label="Cultural Museums" />
                                        <FormControlLabel control={<Radio />} value="shopping" id="shopping" label="Shopping" />
                                        <FormControlLabel control={<Radio />} value="bar" id="bar" label="Bar hopping" />
                                        <FormControlLabel control={<Radio />} value="snorkeling" id="snorkeling" label="Snorkeling" />
                                    </div>
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </div>
            </Grid>
            <Grid item xs={9}>
                <div className="question2 show-on-scroll">
                    <p>2/6</p>
                    <FormControl component="fieldset">
                        <FormLabel htmlFor="response2" component="legend">Which is your dream accomadation:</FormLabel>
                        <RadioGroup className={classes.formControl} value={userAnswer.response2} onChange={handleControlledInputChange} required name="response2" >
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs={6}>
                                    <div className="question1Answers">
                                        <FormControlLabel control={<Radio />} value="boat" id="boat" label="On a boat" />
                                        <FormControlLabel control={<Radio />} value="villa" id="villa" label="Local villa" />
                                        <FormControlLabel control={<Radio />} value="apartment" id="apartment" label="City Apartment" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="question1Answers">
                                        <FormControlLabel control={<Radio />} value="resort" id="resort" label="All-inclusive Resort" />
                                        <FormControlLabel control={<Radio />} value="bungalow" id="bungalow" label="Beach bungalow" />
                                        <FormControlLabel control={<Radio />} value="hotel" id="hotel" label="Posh hotel" />
                                    </div>
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </div>
            </Grid>
            <Grid item xs={3}>
                <img className="solo" src={solo} alt="Solo adventure" />
            </Grid>
            <Grid item xs={4}>
                <img className="hike" src={hike} alt="Hiking adventure" />
            </Grid>
            <Grid item xs={8}>
                <div className="question3 show-on-scroll">
                    <p>3/6</p>
                    <FormControl component="fieldset">
                        <FormLabel htmlFor="response3" component="legend">On a vacation, you want to be:</FormLabel>
                        <RadioGroup className={classes.formControl} value={userAnswer.response3} onChange={handleControlledInputChange} required name="response3" >
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs={6}>
                                    <div className="question1Answers">
                                        <FormControlLabel control={<Radio />} value="relaxed" id="relaxed" label="Relaxed 24/7" />
                                        <FormControlLabel control={<Radio />} value="adventure" id="adventure" label="On an adventure" />
                                        <FormControlLabel control={<Radio />} value="learn" id="learn" label="Learning something new" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="question1Answers">
                                        <FormControlLabel control={<Radio />} value="party" id="party" label="A party animal" />
                                        <FormControlLabel control={<Radio />} value="cultural" id="cultural" label="Celebrating other cultures" />
                                        <FormControlLabel control={<Radio />} value="pampered" id="pampered" label="Getting pampered" />
                                    </div>
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </div>
            </Grid>
            <Grid item xs={2}>
                <img className="quiz3" src={quiz3} alt="Blob" />
            </Grid>
            <Grid item xs={8}>
                <div className="question4 show-on-scroll">
                    <p>4/6</p>
                    <FormControl component="fieldset">
                        <FormLabel htmlFor="response4" component="legend">What is your ideal temperature?</FormLabel>
                        <RadioGroup className={classes.formControl} value={userAnswer.response4} required onChange={handleControlledInputChange} name="response4" >
                            <FormControlLabel control={<Radio />} value="snow" id="snow" label="Snow bunny" />
                            <FormControlLabel control={<Radio />} value="sweater" id="sweater" label="Sweater weather" />
                            <FormControlLabel control={<Radio />} value="moderate" id="moderate" label="Moderate is key" />
                            <FormControlLabel control={<Radio />} value="hot" id="hot" label="Hotter the better" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </Grid>
            <Grid item xs={2}>
                <img className="quiz2" src={quiz2} alt="Blob" />
            </Grid>
            <Grid item xs={8}>
                <div className="question5 show-on-scroll">
                    <p>5/6</p>
                    <FormControl component="fieldset">
                        <FormLabel htmlFor="response5" component="legend">What do you want to eat on your trip?</FormLabel>
                        <RadioGroup className={classes.formControl} value={userAnswer.response5} required onChange={handleControlledInputChange} name="response5" >
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs={6}>
                                    <div className="question1Answers">
                                        <FormControlLabel control={<Radio />} value="seafood" id="seafood" label="Seafood, please" />
                                        <FormControlLabel control={<Radio />} value="healthy" id="healthy" label="Healthy is key" />
                                        <FormControlLabel control={<Radio />} value="local" id="local" label="Local cuisine" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="question1Answers">
                                        <FormControlLabel control={<Radio />} value="restaurant" id="restaurant" label="5-Star restaurants" />
                                        <FormControlLabel control={<Radio />} value="wine" id="wine" label="Anything with wine" />
                                        <FormControlLabel control={<Radio />} value="cook" id="cook" label="I want to cook!" />
                                    </div>
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </FormControl>
                </div>
            </Grid>
            <Grid item xs={4}>
                <img className="swim" src={swim} alt="swim" />
            </Grid>
            <Grid item xs={3}>
                <img className="beach" src={beach} alt="beach" />
            </Grid>
            <Grid item xs={9}>
                <div className="question6 show-on-scroll">
                    <p>6/6</p>
                    <FormControl component="fieldset">
                        <FormLabel htmlFor="response6" component="legend">What is your trip budget?</FormLabel>
                        <RadioGroup className={classes.formControl} value={userAnswer.response6} required onChange={handleControlledInputChange} name="response6" >
                            <FormControlLabel control={<Radio />} value="$" id="cheap" label="$" />
                            <FormControlLabel control={<Radio />} value="$$" id="affordable" label="$$" />
                            <FormControlLabel control={<Radio />} value="$$$" id="lavish" label="$$$" />
                            <FormControlLabel control={<Radio />} value="$$$$" id="expensive" label="$$$$" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </Grid>
            <div>
                <button
                    type="submit"
                    className="submitButton"
                    onClick={handleClickSaveAnswer}
                    disabled={isLoading}>
                    Submit</button>
            </div>
        </Grid >
    )
}

export default QuizQuestions;