import React from "react";
import "./home.css";
import friends from "../../images/friends.png";
import homepage1 from "../../images/homepage1.png";
// import homepage2 from "../../images/homepage2.png";
import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import { Grid } from "@material-ui/core";

export const Homepage = () => {

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={6}>
          <div className="item1title">
            <h1>Planning a trip with nowhere to go?</h1>
            <form method="get" action="/quiz">
              <button className="quizButton" type="submit">Take the quiz</button>
            </form>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img className="friends" src={friends} alt="friends" />
        </Grid>
        <Grid item xs={4}>
          <img className="homepage1" src={homepage1} alt="blob" />
        </Grid>
        <Grid item xs={8}>
          <div className="introCopy">
            <p>TravelMatch wants to match you to the right destination. There are thousands of trips, we just need to find your perfect one.</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="stepsContainer">
            <Grid container >
              <Grid item xs={10}>
                <div className="stepSectionHeadline">
                  <h2>Three easy steps to get started:</h2>
                </div>
              </Grid>
              <Grid item xs={3}>
                <img className="one" src={one} alt="one" />
              </Grid>
              <Grid item xs={9}>
                <p>Take the travel quiz and enter your trip’s criteria.</p>
              </Grid>
              <Grid item xs={3}>
                <img className="two" src={two} alt="two" />
              </Grid>
              <Grid item xs={9}>
                <p>Sort through the potential destination matches and find your dream spot.</p>
              </Grid>
              <Grid item xs={3}>
                <img className="three" src={three} alt="three" />
              </Grid>
              <Grid item xs={9}>
                <p>Save your trip and get ready for an adventure.</p>
              </Grid>
            </Grid>
            <Grid container className="articleContainer">
              <Grid item xs={3}>
                <div className="topArticleCard">
                  <h3>Top Travel Destinations for 2021</h3>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="topArticleCard">
                  <h3>10 Travel Activities You have to Try?</h3>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="topArticleCard">
                  <h3>10 Best Undiscovered Islands</h3>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <form method="get" action="/quiz">
                <button className="getStarted" type="submit">Get Started</button>
              </form>
            </Grid>
          </div>
        </Grid>
        {/* <Grid item xs={12} classname="bottomGrid">
          <img className="homepage2" src={homepage2} alt="blob" />
        </Grid> */}
      </Grid>
    </>
  );
};