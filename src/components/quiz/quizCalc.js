import { getAllLocations } from "../../modules/LocationManager"
import { getAnswerById } from "../../modules/UserAnswerManager"



const resultFunc = (userAnswer, locationOfferings) => {
  const match = locationOfferings.filter(locationOffering => locationOffering.toLowerCase() === userAnswer.toLowerCase())
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
      locationID: location.id,
      tripName: userAnswer.tripName,
      tripType: userAnswer.tripType,
      locationName: location.name,
      locationActivities: location.topActivities,
      locationTime: location.time,
      locationDescription: location.description,
      userId: parseInt(sessionStorage.getItem("travelmatch_user")),
      locationImage: location.image,
      score: score,
      id: ''
    })
  })
  return results
}

export const getRankedLocation = async (userAnswerId) => {
  const locations = await getAllLocations();
  const userAnswer = await getAnswerById(userAnswerId);
  const rankedArray = scoreCalc(locations, userAnswer)
  rankedArray.sort((a, b) => b.score - a.score)
  const topMatchArray = rankedArray.slice(0, 3)
  return topMatchArray
}


