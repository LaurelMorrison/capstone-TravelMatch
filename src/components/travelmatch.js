import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./applicationViews"
import { Login } from "./auth/login"
import { Register } from "./auth/register"
import { NavBar } from "./nav/navBar"
import { Footer } from "./nav/footer"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#DC8966' },
    secondary: { main: '#DC8966' },
  },
});
export const TravelMatch = () => (

  <MuiThemeProvider theme={theme}>
    <Route
      render={() => {
        if (sessionStorage.getItem("travelmatch_user")) {
          return (
            <>
              <NavBar />
              <div className="applicationView">
                <ApplicationViews />
              </div>
              <Footer />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/register">
      <Register />
    </Route>
  </MuiThemeProvider>
)
