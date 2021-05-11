import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from './home/home'
import { QuizQuestions } from './quiz/questions'
import { ResultList } from './results/resultList'
import { TripList } from './user/tripList'
import { DestinationArticle } from './home/destinationArticle'
import { PlanningArticle } from './home/planningArticle'
import { IslandArticle } from './home/islandArticle'
import { PackingCheckboxList } from './user/packingChecklist'

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <Homepage />
      </Route>

      <Route exact path="/quiz">
        <QuizQuestions />
      </Route>

      <Route path="/results">
        <ResultList />
      </Route>

      <Route path="/trips">
        <TripList />
      </Route>

      <Route exact path="/article1">
        <DestinationArticle />
      </Route>

      <Route exact path="/article2">
        <PlanningArticle />
      </Route>

      <Route exact path="/article3">
        <IslandArticle />
      </Route>

      <Route exact path="/packingList">
        <PackingCheckboxList />
      </Route>
    </>
  )
}
