import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from './home/home'
import { QuizQuestions } from './quiz/questions'
import { ResultList } from './results/resultList'

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

    </>
  )
}
