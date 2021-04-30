import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from './home/home'
import { QuizQuestions } from './quiz/questions'
import { ResultList } from './results/resultList'
import { CheckboxesGroup } from './quiz/multiForm'

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <Homepage />
      </Route>

      <Route exact path="/quiz">
        <QuizQuestions />
      </Route>

      <Route exact path="/results">
        <ResultList />
      </Route>

      <Route exact path="/debug">
        <CheckboxesGroup />
      </Route>
      
    </>
  )
}
