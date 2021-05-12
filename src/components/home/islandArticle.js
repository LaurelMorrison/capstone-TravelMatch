import React from "react";
import "./home.css";
import { Grid } from "@material-ui/core";
import digue from "../../images/digue.jpg";
import brac from "../../images/brac.jpg";
import azores from "../../images/azores.jpg";
import culebbra from "../../images/culebbra.jpg";
import nevis from "../../images/nevis.jpg";
import skopelos from "../../images/skopelos.jpg";
import palawan from "../../images/palawan.jpg";
import gozo from "../../images/gozo.jpg";
import fernando from "../../images/fernando.jpg";
import panarea from "../../images/panarea.jpg";
import { Link } from "react-router-dom";


export const IslandArticle = () => {

    return (
        <>
            <Grid container justify="center">
                <Grid item xs={8}>
                    <div className="articleSection">
                        <div className="articletitle">
                            <h1>10 Best Underrated Islands</h1>
                        </div>
                        <p>When it comes to our island vacations, we're all about off-the-grid. Here are 10 island spots that have remained blissfully secret. While plenty of islands have been overrun by huge all-inclusive resorts and massive cruise ships, there are still a number of under-the-radar islands out there.</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>10. La Digue, Seychelles </h3>
                        <p>Renowned for its unspoiled beaches, craggy shoreline, and exotic wildlife, La Digue is popular among fashion photographers and Hollywood location scouts. Anse Source D’Argent, the isle's gorgeous powdery pink-sand beach, has served as the backdrop for movies like Castaway and Robinson Crusoe and is said to be the most photographed stretch of sand in the world. While getting to the remote isle requires a rocky hour-long boat ride from neighboring island Praslin, once you've arrived, it's all about a total immersion in nature.</p>
                        <img className="article3Image" src={digue} alt="Digue" />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>9. Brač, Croatia</h3>
                        <p>Out in the Adriatic, the island of Brač, Croatia beckons with white-pebble beaches, enchanting resort towns with labyrinth-like streets, and proximity to Split (just a ferry ride away). If you like your accommodations homey, the sea-view Villa Giardino in Bol with a private garden, English lawn, and homemade breakfast on the terrace is your go-to. For a more stylish stay, the modern, five-suite boutique Hotel Bol delivers with a Finnish sauna, lobby bar, and private guest room balconies. </p>
                        <img className="article3Image" src={brac} alt="Brač, Croatia" />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>8. Azores, Portugal </h3>
                        <p>While tourists flock to the Canary Islands, the Portuguese Azores remains a remote locale. The archipelago is Europe’s answer to Hawaii—each of the nine islands has a low-key vibe and a rugged landscape to match Kauai—except for its affordable price point. On the main island of San Miguel, the two best places to sleep are Quinta do Mar, an inviting B&B in the hills along the coast, and Terra Nostra Garden Hotel, an upscale resort next to the botanical gardens. </p>
                        <img className="article3Image" src={azores} alt="Azores, Portugal" />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>7. Culebra, Puerto Rico </h3>
                        <p>Looking for a nearby escape that feels far-flung? The sleepy isle of Culebra, 20 miles east of Puerto Rico, is just the ticket. While its sister Vieques takes the attention, Culebra is adored for its ten untouched beaches, lush wildlife preserves, and the tiny town of Dewey. The canary-yellow cottages at Club Seabourne serve as your crash pad by Fulladoza Bay. From here, hit the crescent-shaped shore of Playa Flamenco to snorkel with sea turtles and tropical fish.</p>
                        <img className="article3Image" src={culebbra} alt="Culebra" />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>6. Nevis </h3>
                        <p>The twin islands of St. Kitts and Nevis pack a one-two punch of postcard-perfect beaches, mountainous coastlines, and relaxed Caribbean cultures. But in lumping the two together (they're technically one nation), Nevis gets overshadowed by its larger sister island. Despite its petite size, this colonial beauty has plenty to its name, starting with the Four Seasons Resort Nevis and its three infinity pools, cabana-style accommodations, and wraparound verandas all resting at the base of Mount Nevis. During the day, mosey around the botanical gardens at the Montpelier Plantation and Beach or brush up on the history of Nevis' sugarcane industry and the life of Alexander Hamilton (it's his birthplace) at the Museum of Nevis History.</p>
                        <img className="article3Image" src={nevis} alt="Nevis" />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>5. Skopelos, Greece </h3>
                        <p>Santorini. Mykonos. Crete. Greece is home to 227 inhabited islands across the Aegean and Ionian Seas, yet these three steal the spotlight every time. Skip the crowds for Skopelos, just an hour ferry ride from Skiathos, where you'll find unspoiled coastline, charming blue-roofed tavernas, and Byzantine-era monasteries. Rent a private villa with terraces overlooking the cerulean Aegean at Adrina Resort and Spa (trust us, you’ll never want to leave).</p>
                        <img className="article3Image" src={skopelos} alt="Skopelos" />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>4. Palawan, Philippines</h3>
                        <p>An overwater bungalow is the only way to stay at this sparsely populated (and blissfully undeveloped) Filipino gem, and the thatched roofs at Apulit Island Resort more than fit our bill. The resort's cottages stretch out in a line through the turquoise surf of Taytay Bay, just as the island of Palawan itself reaches almost to Malaysian Borneo. Though most visitors bed down in the gateway city of El Nido, the real culinary scene is found in Puerto Princesa thanks to locally-favored spots like the bamboo-shaded La Terrasse. </p>
                        <img className="article3Image" src={palawan} alt="Palawan" />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>3. Gozo, Malta</h3>
                        <p>Off the coast of Italy, out in the middle of the Mediterranean, the quiet and impossibly green Gozo takes its place in a chain of islands that make up the Maltese archipelago. With rural fishing villages and idyllic bays, the isle is thought to be pulled straight from the pages of Homer’s Odyssey. Drop your bags at the Kempinski Hotel San Lawrenz where modern luxuries—namely an oriental hammam and ayurveda center—rest in the traditional countryside village of San Lawrenz. </p>
                        <img className="article3Image" src={gozo} alt="Gozo, Malta" />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>2. Fernando de Noronha, Brazil </h3>
                        <p>Mention Fernando de Noronha to any naturalist or ecologist and they’re sure to know all about this under-the-radar archipelago—it's one of the most fiercely protected natural environments in the world. In an effort to preserve the eco-wonderland, only 420 tourists are permitted to visit at any one time, but if you manage to be one of the lucky ones, book a stay at Pousada Maravilha, an intimate hilltop retreat with five bungalows, an infinity-edge pool, and panoramic views of the island's rugged landscapes. To experience the area's rich marine life, bring your snorkeling gear to Baía dos Porcos for the chance to glimpse turtles, stingrays, and whales.</p>
                        <img className="article3Image" src={fernando} alt="Fernando de Noronha, Brazil" />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>1. Panarea, Italy </h3>
                        <p>Just off the coast of northern Sicily, this Aeolian gem is practically picture-perfect with its whitewashed buildings covered in fuchsia bougainvillea and narrow, romantic lanes made for strolling. (The island is car-free, so you’ll only be passed by golf carts, Motorino electric bikes, and Italian three-wheelers). Home base is the 28-room Hotel Lisca Bianca, which has a rooftop sushi restaurant and striking views of the ocean from its blue-tiled terraces. During the day, explore the island’s caves by barca and cool off with some granita (a slushy-icy treat) at Bar Del Porto.</p>
                        <img className="article3Image" src={panarea} alt="Panarea, Italy" />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="buttonSpotBox">
                        <div className="buttonBox">
                            <Link to={`/quiz`}>
                                <button className="button">Plan a Trip</button>
                            </Link>
                        </div>
                        <div className="buttonBox">
                            <Link to={`/article1`}>
                                <button className="button">Next Article</button>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}