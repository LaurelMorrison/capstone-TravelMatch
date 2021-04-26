import React from "react"
import { Route } from "react-router-dom"
import { Homepage } from './home/home'

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <Homepage />
      </Route>


    </>
  )
}
