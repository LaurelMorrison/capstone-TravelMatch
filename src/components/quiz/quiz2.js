// import React, { useState } from "react"
// import { useHistory } from 'react-router';
// import { addNewAnswers } from '../../modules/UserAnswerManager'
// import "./quiz.css";
// import Slider from '@material-ui/core/Slider';
// import { Select, MenuItem, InputLabel } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Checkbox from '@material-ui/core/Checkbox';
// ;


// const useStyles = makeStyles(theme => ({
//     formControl: {
//         minWidth: 150,
//         margin: theme.spacing(3)
//     },
//     root: {
//         display: 'flex'
//     },
// }))

// export const QuizQuestions2 = (question) => {


//     function valueTemp(value) {
//         return `${value}`;
//     }

//     function valueBudget(value) {
//         return `${value}`;
//     }

//     const budgetMarks = [
//         {
//             value: 1,
//             label: "Budget Friendly"
//         },
//         {
//             value: 10,
//             label: "Spare No Expense"
//         }
//     ]

//     const weatherMarks = [
//         {
//             value: 1,
//             label: "Snow Bunny"
//         },
//         {
//             value: 10,
//             label: "Hotter the Better"
//         }
//     ]

//     // const tripType = ['Couples Retreat', 'Family Vacay', 'Friends Trip', 'Solo Adventure']
//     // const defaultType = tripType[0];

//     const [isLoading, setIsLoading] = useState(false)
//     const classes = useStyles();
//     const [userAnswer, setUserAnswer] = useState({
//         tripName: '',
//         tripType: '',
//         tripMonth: '',
//         userId: parseInt(sessionStorage.getItem("travelmatch_user")),
//         response1: "",
//         response2: '',
//         response3: '',
//         response4: 5,
//         response5: '',
//         response6: 5
//     });

//     const [state, setState] = React.useState({
//         hiking: false,
//         bungee: false,
//         beach: false,
//         cooking: false,
//         skiing: false,
//         vineyard: false,
//         museum: false,
//         shopping: false,
//         party: false,
//         snorkling: false
//     })

//     const { hiking, bungee, beach, cooking, skiing, vineyard, museum, shopping, party, snorkling } = state;
//     const error = [hiking, bungee, beach, cooking, skiing, vineyard, museum, shopping, party, snorkling].filter((v) => v).length !== 3;

//     const history = useHistory();

//     const handleCheckboxChange = (event) => {
//         setState({ ...state, [event.target.name]: event.target.checked });
//     };

//     const handleControlledInputChange = (event) => {
//         const newUserAnswer = { ...userAnswer }
//         console.log({ ...userAnswer })
//         let selectedVal = event.target.value
//         if (event.target.id.includes("Id")) {
//             selectedVal = parseInt(selectedVal)
//         }
//         console.log(newUserAnswer)
//         newUserAnswer[event.target.tripType] = selectedVal
//         setUserAnswer(newUserAnswer)
//     }

//     const handleClickSaveAnswer = (event) => {
//         event.preventDefault()
//         setIsLoading(true)
//         addNewAnswers(userAnswer)
//             .then(() => history.push("/results"))
//     }


//     return (
//         <div>
//             <div>
//                 <h1>Get started!</h1>
//                 <h4>Answer the questions below and get matched with your dream destination.</h4>
//             </div>
//             <form id="form1">
//                 <div>
//                     <fieldset>
//                         <FormControl>
//                             <InputLabel htmlFor="tripName">Name your trip:
//                                 <input
//                                     value={userAnswer.tripName}
//                                     type="text"
//                                     name="name"
//                                     id="tripName"
//                                     onChange={handleControlledInputChange} />
//                             </InputLabel>
//                         </FormControl>
//                     </fieldset>
//                     <fieldset>
//                         <FormControl className={classes.formControl}>
//                             <InputLabel htmlFor="tripType">Type of trip: </InputLabel>
//                             <Select name="typeDropdown" value={userAnswer.tripType} >
//                                 <MenuItem value={"Couples Retreat"} >Couple's Retreat</MenuItem>
//                                 <MenuItem value={"Family Vacay"}  >Family Vacay</MenuItem>
//                                 <MenuItem value={"Friends Trip"}  >Friends Trip</MenuItem>
//                                 <MenuItem value={"Solo Adventure"} >Solo Adventure</MenuItem>
//                             </Select>
//                             {/* <Dropdown options={tripType} onChange={this._onSelect} value={defaultType} placeholder="Select an option" /> */}
//                         </FormControl>
//                     </fieldset>
//                     <fieldset>
//                         <FormControl className={classes.formControl}>
//                             <InputLabel> Month of trip: </InputLabel>
//                             <Select htmlFor="tripMonth" name="monthDropdown" value={userAnswer.tripMonth} >
//                                 <MenuItem value="January">January</MenuItem>
//                                 <MenuItem value="February">February</MenuItem>
//                                 <MenuItem value="March">March</MenuItem>
//                                 <MenuItem value="April">April</MenuItem>
//                                 <MenuItem value="May">May</MenuItem>
//                                 <MenuItem value="June">June</MenuItem>
//                                 <MenuItem value="July">July</MenuItem>
//                                 <MenuItem value="August">August</MenuItem>
//                                 <MenuItem value="September">September</MenuItem>
//                                 <MenuItem value="October">October</MenuItem>
//                                 <MenuItem value="November">November</MenuItem>
//                                 <MenuItem value="December">Decemeber</MenuItem>
//                             </Select>
//                         </FormControl>
//                     </fieldset>
//                 </div>
//                 <div>
//                     <FormControl>
//                         <p>1/6</p>
//                         <FormLabel htmlFor="response1">Pick your top 3 activities</FormLabel>
//                         <FormGroup required error={error} component="fieldset" className={classes.formControl} value={userAnswer.response1} >
//                             {/* <h4>{questions[0].questionText}</h4>
//                     {questions[0].answerOptions.map((answerOptions)=>(<button>{answerOptions.answerText}</button>))} */}
//                             <FormControlLabel control={<Checkbox checked={hiking} type="activities" name="hiking" onChange={handleCheckboxChange} id="adventure" />} label="Hiking" />
//                             <FormControlLabel control={<Checkbox checked={bungee} type="activities" name="bungee" onChange={handleCheckboxChange} id="adventure" />} label="Bungee Jumping" />
//                             <FormControlLabel control={<Checkbox checked={beach} type="activities" name="beach" onChange={handleCheckboxChange} id="beach" />} label="Beach" />
//                             <FormControlLabel control={<Checkbox checked={cooking} type="activities" name="cooking" onChange={handleCheckboxChange} id="cultural" />} label="Cooking Class" />
//                             <FormControlLabel control={<Checkbox checked={skiing} type="activities" name="skiing" onChange={handleCheckboxChange} id="mountain" />} label="Skiing" />
//                             <FormControlLabel control={<Checkbox checked={vineyard} type="activities" name="vineyard" onChange={handleCheckboxChange} id="pampered" />} label="Vineyard Visit" />
//                             <FormControlLabel control={<Checkbox checked={museum} type="activities" name="museum" onChange={handleCheckboxChange} id="cultural" />} label="Cultural Museums" />
//                             <FormControlLabel control={<Checkbox checked={shopping} type="activities" name="shopping" onChange={handleCheckboxChange} id="pampered" />} label="Shopping" />
//                             <FormControlLabel control={<Checkbox checked={party} type="activities" name="party" onChange={handleCheckboxChange} id="party" />} label="Bar hopping" />
//                             <FormControlLabel control={<Checkbox checked={snorkling} type="activities" name="snorkling" onChange={handleCheckboxChange} id="beach" />} label="Snorkling" />
//                             {/* <button><option type="vacation" name="activities" id={buttonId} value={buttonValue} />Bar hopping</button> */}
//                         </FormGroup>
//                         <FormHelperText>You can display an error</FormHelperText>
//                     </FormControl>
//                 </div>
//                 <div>
//                     <fieldset>
//                         <p>2/6</p>
//                         <label htmlFor="response2">Dream Accomodations</label>
//                         <button><option type="vacation" name="accomodations" onChange={handleControlledInputChange} id="Boat" value="adventure" />On a boat</button>
//                         <button><option type="vacation" name="accomodations" onChange={handleControlledInputChange} id="Villa" value="cultural" />Local villa</button>
//                         <button><option type="vacation" name="accomodations" onChange={handleControlledInputChange} id="Apartment" value="party" />City Apartment</button>
//                         <button><option type="vacation" name="accomodations" onChange={handleControlledInputChange} id="Resort" value="pampered" />All-inclusive Resort</button>
//                         <button><option type="vacation" name="accomodations" onChange={handleControlledInputChange} id="Bungalow" value="beach" />Beach bungalow</button>
//                         <button><option type="vacation" name="accomodations" onChange={handleControlledInputChange} id="Hotel" value="snow" /> Posh hotel</button>
//                     </fieldset>
//                 </div>
//                 <div>
//                     <fieldset>
//                         <p>3/6</p>
//                         <label htmlFor="response3">On a vacation, you want to be:</label>
//                         <button><option type="vacation" name="mood" onChange={handleControlledInputChange} id="Relaxed" value="beach" />Relaxed 24/7</button>
//                         <button><option type="vacation" name="mood" onChange={handleControlledInputChange} id="Adventure" value="adventure" />On an adventure</button>
//                         <button><option type="vacation" name="mood" onChange={handleControlledInputChange} id="Learning" value="snow" />Learning something new</button>
//                         <button><option type="vacation" name="mood" onChange={handleControlledInputChange} id="Party" value="party" />A party animal</button>
//                         <button><option type="vacation" name="mood" onChange={handleControlledInputChange} id="Cultures" value="cultural" />Celebrating other cultures</button>
//                         <button><option type="vacation" name="mood" onChange={handleControlledInputChange} id="Pampered" value="pampered" />Getting pampered</button>
//                     </fieldset>
//                 </div>
//                 <div>
//                     <fieldset>
//                         <p>4/6</p>
//                         <label htmlFor="response4">What is your ideal temperature?</label>
//                         <Slider
//                             className="tempSlider"
//                             defaultValue={5}
//                             // value={userAnswer.response4} 
//                             // id="response4"
//                             onChange={handleControlledInputChange} required
//                             getAriaValueText={valueTemp}
//                             aria-labelledby="discrete-slider-custom"
//                             min={1}
//                             max={10}
//                             valueLabelDisplay="auto"
//                             marks={weatherMarks}
//                         />
//                     </fieldset>
//                 </div>
//                 <div>
//                     <fieldset>
//                         <p>5/6</p>
//                         <label htmlFor="response5">On a vacation, you want to be:</label>
//                         <button><option type="vacation" onChange={handleControlledInputChange} name="food" id="Seafood" value="beach" />Seafood, please</button>
//                         <button><option type="vacation" onChange={handleControlledInputChange} name="food" id="Healthy" value="snow" />Healthy is key</button>
//                         <button><option type="vacation" onChange={handleControlledInputChange} name="food" id="Local" value="cultural" />Local cuisine</button>
//                         <button><option type="vacation" onChange={handleControlledInputChange} name="food" id="Fancy" value="pampered" />5-Star restaurants</button>
//                         <button><option type="vacation" onChange={handleControlledInputChange} name="food" id="Wine" value="party" />Anything with wine</button>
//                         <button><option type="vacation" onChange={handleControlledInputChange} name="food" id="Cook" value="adventure" />I want to cook!</button>
//                     </fieldset>
//                 </div>
//                 <div>
//                     <fieldset>
//                         <p>6/6</p>
//                         <label htmlFor="response6">What is your trip budget?</label>
//                         <Slider
//                             className="budgetSlider"
//                             onChange={handleControlledInputChange} required
//                             defaultValue={5}
//                             // value={userAnswer.response6} 
//                             // id="response6"
//                             getAriaValueText={valueBudget}
//                             aria-labelledby="discrete-slider-small-steps"
//                             min={1}
//                             max={10}
//                             marks={budgetMarks}
//                             valueLabelDisplay="auto"
//                         />
//                     </fieldset>
//                 </div>
//                 <div>
//                     <button
//                         type="submit"
//                         onClick={handleClickSaveAnswer}
//                         disabled={isLoading}>
//                         Submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default QuizQuestions;