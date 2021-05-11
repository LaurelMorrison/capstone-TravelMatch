import React from "react";
import "./home.css";
import { Grid } from "@material-ui/core";
import article1 from "../../images/article1.png";
import article2 from "../../images/article2.png";
import article3 from "../../images/article3.png";
import { Link } from "react-router-dom";


export const PlanningArticle = () => {

    return (
        <>
            <Grid container justify="center">
                <Grid item xs={10}>
                    <div className="articleSection">
                        <div className="articletitle">
                            <h1>12 Things to do before you travel </h1>
                        </div>
                        <p>Airfare, hotel accommodations, and rental cars may be the holy trinity of travel preparation, but nailing down these aspects of your vacation is only the beginning of the trip planning process. If you want to achieve a smooth, headache-free trip (and who doesn’t?), taking care of essential tasks like researching activities at your destination, managing your finances, and getting your home in order is key. Don’t leave home without accomplishing the following 10 tasks!</p>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div className="articleSection">
                        <h3>1. THE BOOKINGS </h3>
                        <p>This is the big step: time to do the key bookings. Set up a flight tracker to track pricing, and research the accomondations. Once you have an understanding, book everything and make an itinerary for the travel plans.</p>
                    </div>
                    <br></br>
                    <div className="articleSection">
                        <h3>2. TRAVEL DOCUMENTS </h3>
                        <p>It's important to check your passport about ~9 months ahead of your travel to allow time if you need to renew. Also if you are travel within the US, making sure you have your Real ID license, which will start to be required to fly starting May 3, 2023. Also, check your destination's vaccine requirements. You might need to vaccinate a few weeks ahead of travel. </p>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="imageSection">
                        <img className="articleImage1" src={article1} alt="travelers" />
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className="articleSection">
                        <h3>3. MAKE THE HOME PLAN (such as house or pet sitters) </h3>
                        <p>Once you have a travel date, your first move should be to contact your pet kennel or house sitter (or any other trustworthy service) to guarantee availability. You may even want to take care of this before booking; as reader E.B. Hughes writes, “I have had to pay change fees twice since we got our dog just because the local kennel was full for one night of my trip.”</p>
                    </div>
                    <br></br>
                    <div className="articleSection">
                        <h3>4. STOP ORDERS OR ADVANCE PAYMENT  </h3>
                        <p>Once your travel is booked, you should look into placing “stop” orders on any regularly occurring deliveries or services. These may include postal mail, newspapers, housecleaners and the like. If you want particular services to continue (such as landscaping), consider paying in advance if this is not your usual arrangement. Many service providers allow you to place stop orders online; this is particularly the case for mail delivery and most newspapers. As many stop orders require one or two business days’ advance notice, make sure you take care of this at least three days before you travel.</p>
                    </div>
                    <br></br>
                    <div className="articleSection">
                        <h3>5. MANAGE YOUR CASH FLOW  </h3>
                        <p>If you’re traveling domestically, be sure to hit your own bank before leaving for your trip; that way you won’t arrive short on cash and have to immediately search for an ATM. Further, you will save on ATM fees at machines run by someone other than your own bank. Go to your bank’s website and map out any available ATM locations near your destination so you are not forced to use other banks’ machines.</p>
                    </div>
                </Grid>
                <br></br>
                <Grid item xs={4}>
                    <div className="imageSection">
                        <img className="articleImage1" src={article2} alt="travelers" />
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div className="articleSection">
                        <h3>6. PLAN YOUR FIRST DAY </h3>
                        <p>The first day of your trip is often lost to logistics and unfamiliar surroundings. First you have to haul yourself and your stuff to a resting place. Then you have to figure out exactly where you are, which attractions are nearby and how best to use your limited time. Planning ahead will help you make the most of that first confusing day.</p>
                    </div>
                    <br></br>
                    <div className="articleSection">
                        <h3>7. PLAN YOUR LAST DAY </h3>
                        <p>Keep safely in a packet marked ‘GOING HOME’ your house keys, car keys, cash for taxi or tolls, phone chip and documents you’ll need when you arrive happy but exhausted at your home town airport. Unpacking your luggage at the arrivals area is no fun. </p>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className="articleSection">
                        <h3>8. MAKE A PACKING LIST </h3>
                        <p>It doesn't need to be a full list, but having a checklist of some 'must-bring' items will help reduce travel anxiety and help you remember as you pack. </p>
                    </div>
                    <br></br>
                    <div className="articleSection">
                        <h3>9. CHECK THE WEATHER  </h3>
                        <p>The weather is the single factor most likely to affect your trip positively or negatively, and one of the things many people most take for granted. Of course it is going to be warm in Spain during the spring — right? But there are always exceptions to prevailing weather patterns, especially during transitional seasons. A weather forecast can guide your packing strategy, and failure to check the weather can result in unprepared, unhappy and very soggy travelers.</p>
                    </div>
                    <br></br>
                    <div className="articleSection">
                        <h3>10. SEARCH OUT YOUR HOBBIES AT YOUR DESTINATION </h3>
                        <p>You never know where you will find the “best of” in any given endeavor; for example, one of the best guitar stores in the world can be found in Carlsbad, CA. Who knew? Melbourne, Australia, is renowned for its rich coffee culture, and Udaipur offers cycling enthusiasts spectacular paths for exploring rural India. Do a little research on your favorite hobbies, and you might be pleasantly surprised by what you find at your destination. </p>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div className="articleSection">
                        <h3>11. CHECK ON TRANSPORTATION METHODS </h3>
                        <p>You will need to know how you get around - walking, rental car, public transport, etc. A bit of research online before you leave will also allow you to check fares, print transit maps and plan your itinerary. </p>
                    </div>
                    <br></br>
                    <div className="articleSection">
                        <h3>12. CHECK THE LOCAL ENTERTAINMENT LISTINGS </h3>
                        <p>Most cities and even medium-sized towns have some kind of weekly entertainment rag such as Time Out, which covers dozens of destinations around the globe. These are excellent sources for entertainment listings, reviews, city “best-of” lists and more. It is best to check these from home, as you can then purchase advance tickets where necessary, make restaurant reservations, etc. Another good source is the local tourist board; its website will often have an events calendar where you can check out what’s going on during your trip.</p>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="imageSection">
                        <img className="articleImage1" src={article3} alt="travelers" />
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className="buttonSpotBox">
                        <div className="buttonBox">
                            <Link to={`/quiz`}>
                                <button className="button">Plan a Trip</button>
                            </Link>
                        </div>
                        <div className="buttonBox">
                            <Link to={`/article3`}>
                                <button className="button">Next Article</button>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}