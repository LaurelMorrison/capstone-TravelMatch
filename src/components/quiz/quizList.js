import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {QuizQuestions} from './questions'
// import "./quiz.css";


export const Quizpage = () => {

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     alert('You have submitted the form.')
    //   }

    // const addResults()

  var slider = document.getElementById("sliderRange");
  var output = document.getElementById("sliderOutput");
  output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
  output.innerHTML = this.value;
  }

return (
  <>
    <div>
      <QuizQuestions />
    </div>
  </>
)

}

