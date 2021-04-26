import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from './home/home'
import { Quizpage } from './quiz/quizList'

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <Homepage />
      </Route>

      <Route exact path="/quiz">
        <Quizpage />
      </Route>

    </>
  )
}
