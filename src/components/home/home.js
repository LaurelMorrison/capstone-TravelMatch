import React from "react";
import "./home.css";
import friends from "../../images/friends.png";
import homepage1 from "../../images/homepage1.png";
// import homepage2 from "../../images/homepage2.png";
import one from "../../images/one.png";
import { Link } from "react-router-dom";
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
              <button className="buttonLarge" type="submit">Take the quiz</button>
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
            <Grid container justify="center">
              <Grid item xs={10}>
                <div className="stepSectionHeadline">
                  <h2>Three easy steps to get started:</h2>
                </div>
              </Grid>
              <Grid item xs={10}>
                <div className="stepBox">
                  <img className="one" src={one} alt="one" />
                  <p>Take the travel quiz and enter your trip’s criteria.</p>
                </div>
              </Grid>
              <Grid item xs={10}>
                <div className="stepBox">
                  <img className="two" src={two} alt="two" />
                  <p>Sort through the potential destination matches and find your dream spot.</p>
                </div>
              </Grid>
              <Grid item xs={10}>
                <div className="stepBox">
                  <img className="three" src={three} alt="three" />
                  <p>Save your trip and get ready for an adventure.</p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="stepsButtonBox">
                  <form method="get" action="/quiz">
                    <button className="button" type="submit">Get Started</button>
                  </form>
                </div>
              </Grid>
            </Grid>
            <Grid container className="articleContainer">
              <Grid item xs={4}>
                <div className="topArticleCard">
                  <h3 className="articleHeadline">Top Travel Destinations for 2021</h3>
                  <p>2020 was the year of no travel. Everyone was challenged and the world seemed to stand still through the pandemic, as travel is starting to potentially become an option again - check out these top destinations as you start to plan your next trip. One of these spots might be your next adventure. </p>
                  <div className="buttonHomeBox">
                    <Link to={`/article1`}>
                      <button className="button">Read More</button>
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="topArticleCard">
                  <h3 className="articleHeadline">12 things to do before you travel</h3>
                  <p>Airfare, hotel accommodations, and rental cars may be the key three of travel preparation, but nailing down these aspects of your vacation is only the beginning of the trip planning process. If you want to achieve a headache-free trip, don’t leave home without accomplishing the following 12 tasks!</p>
                  <div className="buttonHomeBox">
                    <Link to={`/article2`}>
                      <button className="button">Read More</button>
                    </Link>
                  </div>
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className="topArticleCard">
                  <h3 className="articleHeadline">10 Best Underrated Islands</h3>
                  <p>When it comes to our island vacations, we're all about off-the-grid. Here are 10 island spots that have remained blissfully secret. While plenty of islands have been overrun by huge all-inclusive resorts and massive cruise ships, there are still a number of under-the-radar islands out there.</p>
                  <div className="buttonHomeBox">
                    <Link to={`/article3`}>
                      <button className="button">Read More</button>
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};