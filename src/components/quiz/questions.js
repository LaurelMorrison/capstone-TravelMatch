import React, { useState } from "react"
import "./quiz.css";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


function valueTemp(value) {
    return `${value}`;
}

function valueBudget(value) {
    return `${value}`;
}

const budgetMarks = [
    {
        value: 0,
        label: "Budget Friendly"
    },
    {
        value: 10,
        label: "Spare No Expense"
    }
]

const weatherMarks = [
    {
        value: 0,
        label: "Snow Bunny"
    },
    {
        value: 10,
        label: "Hotter the Better"
    }
]


    export const QuizQuestions = (questions) => {
        // const tripType = ['Couples Retreat', 'Family Vacay', 'Friends Trip', 'Solo Adventure']
        // const defaultType = tripType[0];

        return (
            <div>
                <div>
                    <h1>Get started!</h1>
                    <h4>Answer the questions below and get matched with your dream destination.</h4>
                </div>
                <form id="form1">
                    <div>
                        <fieldset>
                            <label>Name your trip: <input type="text" name="name" /></label>
                        </fieldset>
                        <fieldset>
                            <label>Type of trip:
                    <select name="typeDropdown" placeholder="Select a Type" onSelect="">
                                    <option value="couples">Couple's Retreat</option>
                                    <option value="family">Family Vacay</option>
                                    <option value="friends">Friends Trip</option>
                                    <option value="solo">Solo Adventure</option>
                                </select>
                                {/* <Dropdown options={tripType} onChange={this._onSelect} value={defaultType} placeholder="Select an option" /> */}
                            </label>
                        </fieldset>
                        <fieldset>
                            <label>Month of trip: <select name="monthDropdown" placeholder="Select a Month">
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">Decemeber</option>
                            </select></label>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <p>1/6</p>
                            <h4>Pick your top 3 activities</h4>
                            {/* <h4>{questions[0].questionText}</h4>
                    {questions[0].answerOptions.map((answerOptions)=>(<button>{answerOptions.answerText}</button>))} */}
                            <button><option type="vacation" name="activities" id="Hiking" value="adventure" />Hiking</button>
                            <button><option type="vacation" name="activities" id="BungeeJumping" value="adventure" />Bungee Jumping</button>
                            <button><option type="vacation" name="activities" id="Beach" value="beach" />Beach</button>
                            <button><option type="vacation" name="activities" id="Cooking" value="cultural" />Cooking Class</button>
                            <button><option type="vacation" name="activities" id="Skiing" value="mountain" />Skiing</button>
                            <button><option type="vacation" name="activities" id="Vineyard" value="pampered" />Vineyard Visit</button>
                            <button><option type="vacation" name="activities" id="Museum" value="cultural" />Cultural Museums</button>
                            <button><option type="vacation" name="activities" id="Shopping" value="pampered" />Shopping</button>
                            <button><option type="vacation" name="activities" id="Bar" value="party" />Bar hopping</button>
                            <button><option type="vacation" name="activities" id="Snorkling" value="beach" />Snorkling</button>

                            {/* <button><option type="vacation" name="activities" id={buttonId} value={buttonValue} />Bar hopping</button> */}

                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <p>2/6</p>
                            <h4>Dream Accomodations</h4>
                            <button><option type="vacation" name="accomodations" id="Boat" value="adventure" />On a boat</button>
                            <button><option type="vacation" name="accomodations" id="Villa" value="cultural" />Local villa</button>
                            <button><option type="vacation" name="accomodations" id="Apartment" value="party" />City Apartment</button>
                            <button><option type="vacation" name="accomodations" id="Resort" value="pampered" />All-inclusive Resort</button>
                            <button><option type="vacation" name="accomodations" id="Bungalow" value="beach" />Beach bungalow</button>
                            <button><option type="vacation" name="accomodations" id="Hotel" value="snow" /> Posh hotel</button>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <p>3/6</p>
                            <h4>On a vacation, you want to be:</h4>
                            <button><option type="vacation" name="mood" id="Relaxed" value="beach" />Relaxed 24/7</button>
                            <button><option type="vacation" name="mood" id="Adventure" value="adventure" />On an adventure</button>
                            <button><option type="vacation" name="mood" id="Learning" value="snow" />Learning something new</button>
                            <button><option type="vacation" name="mood" id="Party" value="party" />A party animal</button>
                            <button><option type="vacation" name="mood" id="Cultures" value="cultural" />Celebrating other cultures</button>
                            <button><option type="vacation" name="mood" id="Pampered" value="pampered" />Getting pampered</button>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <p>4/6</p>
                            <h4>What is your ideal temperature?</h4>
                            <Slider
                                defaultValue={5}
                                getAriaValueText={valueTemp}
                                aria-labelledby="discrete-slider-custom"
                                min={0}
                                max={10} 
                                valueLabelDisplay="auto"
                                marks={weatherMarks}
                                />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <p>5/6</p>
                            <h4>On a vacation, you want to be:</h4>
                            <button><option type="vacation" name="food" id="Seafood" value="beach" />Seafood, please</button>
                            <button><option type="vacation" name="food" id="Healthy" value="snow" />Healthy is key</button>
                            <button><option type="vacation" name="food" id="Local" value="cultural" />Local cuisine</button>
                            <button><option type="vacation" name="food" id="Fancy" value="pampered" />5-Star restaurants</button>
                            <button><option type="vacation" name="food" id="Wine" value="party" />Anything with wine</button>
                            <button><option type="vacation" name="food" id="Cook" value="adventure" />I want to cook!</button>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <p>6/6</p>
                            <h4>What is your trip budget?</h4>
                            <Slider
                                defaultValue={5}
                                getAriaValueText={valueBudget}
                                aria-labelledby="discrete-slider-small-steps"
                                min={0}
                                max={10}
                                marks={budgetMarks}
                                // valueLabelDisplay="auto" 
                                />
                        </fieldset>
                    </div>
                    <div>
                        <button type="submit" value="submit" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }

    export default QuizQuestions;