import React, { useState } from "react";
import { getAllLocations } from "../../modules/LocationManager"
import { getAnswerById } from "../../modules/UserAnswerManager"
import { ResultList } from "../results/resultList";



const resultFunc = (userAnswer, locationOfferings) => {
  const match = locationOfferings.filter(locationOffering => locationOffering.toLowerCase() === userAnswer.toLowerCase())
  console.log(userAnswer, locationOfferings)
  return match.length ? 1 : 0
}

const scoreCalc = (locations, userAnswer) => {
  const results = []
  locations.forEach(location => {
    let score = 0
    score += resultFunc(userAnswer.response1, location.activity)
    score += resultFunc(userAnswer.response2, location.accomodation)
    score += resultFunc(userAnswer.response3, location.mood)
    score += resultFunc(userAnswer.response4, location.temp)
    score += resultFunc(userAnswer.response5, location.food)
    score += resultFunc(userAnswer.response6, location.budget)
    results.push({
      location: location.name,
      score: score
    })
  })
  return results
}

export const getRankedLocation = async(userAnswerId) => {
  const locations = await getAllLocations();
  const userAnswer = await getAnswerById(userAnswerId);
  const rankedArray = scoreCalc(locations, userAnswer)
  console.log(rankedArray)
  const topMatchArray = rankedArray.slice(0, 3)
  return topMatchArray
}

//fix data
//sort the results (by score)
//show up on the result list