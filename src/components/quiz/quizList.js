import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import Dropdown from 'react-dropdown'


export const Quizpage = () => {
    return (
        <div>
            <div>
                <h1>Get started!</h1>
                <h4>Answer the questions below and get matched with your dream destination.</h4>
            </div>
            <form id="form1">
                <div>
                    <label>Name your trip: <input type="text" name="name" /></label>
                    <label>Type of trip: <select name="typeDropdown" placeholder="Select a Type">
                        <option value="couples">Couple's Retreat</option>
                        <option value="family">Family Vacay</option>
                        <option value="friends">Friends Trip</option>
                        <option value="solo">Solo Adventure</option>
                    </select></label>
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
                </div>
                <div>
                    <p>1/6</p>
                    <h4>Pick your top 3 activities</h4>
                    <label><option type="vacation" name="activities" id="Hiking" value="adventure" />Hiking</label>
                    <label><option type="vacation" name="activities" id="BungeeJumping" value="adventure" />Bungee Jumping</label>
                    <label><option type="vacation" name="activities" id="Beach" value="beach" />Beach</label>
                    <label><option type="vacation" name="activities" id="Cooking" value="cultural" />Cooking Class</label>
                    <label><option type="vacation" name="activities" id="Skiing" value="mountain" />Skiing</label>
                    <label><option type="vacation" name="activities" id="Vineyard" value="pampered" />Vineyard Visit</label>
                    <label><option type="vacation" name="activities" id="Museum" value="cultural" />Cultural Museums</label>
                    <label><option type="vacation" name="activities" id="Shopping" value="pampered" />Shopping</label>
                    <label><option type="vacation" name="activities" id="Bar" value="party" />Bar hopping</label>
                    <label><option type="vacation" name="activities" id="Snorkling" value="beach" />Snorkling</label>
                </div>
                <div>
                    <p>2/6</p>
                    <h4>Dream Accomodations</h4>
                    <label><option type="vacation" name="accomodations" id="Boat" value="adventure" />On a boat</label>
                    <label><option type="vacation" name="accomodations" id="Villa" value="cultural" />Local villa</label>
                    <label><option type="vacation" name="accomodations" id="Apartment" value="party" />City Apartment</label>
                    <label><option type="vacation" name="accomodations" id="Resort" value="pampered" />All-inclusive Resort</label>
                    <label><option type="vacation" name="accomodations" id="Bungalow" value="beach" />Beach bungalow</label>
                    <label><option type="vacation" name="accomodations" id="Hotel" value="snow" /> Posh hotel</label>
                </div>
                <div>
                    <p>3/6</p>
                    <h4>On a vacation, you want to be:</h4>
                    <label><option type="vacation" name="mood" id="Relaxed" value="beach" />Relaxed 24/7</label>
                    <label><option type="vacation" name="mood" id="Adventure" value="adventure" />On an adventure</label>
                    <label><option type="vacation" name="mood" id="Learning" value="snow" />Learning something new</label>
                    <label><option type="vacation" name="mood" id="Party" value="party" />A party animal</label>
                    <label><option type="vacation" name="mood" id="Cultures" value="cultural" />Celebrating other cultures</label>
                    <label><option type="vacation" name="mood" id="Pampered" value="pampered" />Getting pampered</label>
                </div>
                <div>
                    <p>5/6</p>
                    <h4>On a vacation, you want to be:</h4>
                    <label><option type="vacation" name="food" id="Seafood" value="beach" />Seafood, please</label>
                    <label><option type="vacation" name="food" id="Healthy" value="snow" />Healthy is key</label>
                    <label><option type="vacation" name="food" id="Local" value="cultural" />Local cuisine</label>
                    <label><option type="vacation" name="food" id="Fancy" value="pampered" />5-Star restaurants</label>
                    <label><option type="vacation" name="food" id="Wine" value="party" />Anything with wine</label>
                    <label><option type="vacation" name="food" id="Cook" value="adventure" />I want to cook!</label>
                </div>
                <div>
                    <button type="submit" value="submit">Submit</button>
                </div>
            </form>
        </div>
)
}