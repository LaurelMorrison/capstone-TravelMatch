import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./applicationViews"
import { Login } from "./auth/login"
import { Register } from "./auth/register"

export const TravelMatch = () => (

  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("travelmatch_user")) {
          return (
            <>
              <div className="applicationView">
              <ApplicationViews />
              </div>

            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    /> 

     <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)
