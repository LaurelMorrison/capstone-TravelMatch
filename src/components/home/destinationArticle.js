import React from "react";
import "./home.css";
import { Grid } from "@material-ui/core";
import dominican from "../../images/dominican.jpeg";
import helsinki from "../../images/helsinki.jpeg";
import amazon from "../../images/amazon.jpeg";
import accra from "../../images/accra.jpeg";
import kimberly from "../../images/kimberly.jpeg";
import elhierro from "../../images/elhierro.jpeg";
import uae from "../../images/uae.jpeg";
import melides from "../../images/melides.jpeg";
import yorkshire from "../../images/yorkshire.jpeg";
import slovina from "../../images/slovina.jpeg";
import { Link } from "react-router-dom";


export const DestinationArticle = () => {

    return (
        <>
            <Grid container justify="center">
                <Grid item xs={8}>
                    <div className="articleSection">
                        <div className="articletitle">
                            <h1>Top Travel Destinations for 2021</h1>
                        </div>
                        <p>2020 was the year of no travel. Everyone was challenged and the world seemed to stand still through the pandemic, as travel is starting to potentially become an option again - check out these top destinations as you start to plan your next trip.</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>10. DOMINICAN REPUBLIC, CARIBBEAN </h3>
                        <img className="articleImage" src={dominican} alt="dominican" />
                        <p>The Dominican Republic might be known for the bombastic resorts that line Punta Cana on its eastern tip, but look again and there's another slower, quieter side. Our attention was already piqued when Playa Grande Beach Club opened its shell-studded doors five years ago, closely followed by the Amanera, which incorporates the healing traditions of the region’s indigenous Taíno people in its wellness rituals, on the same northern shore. More recently in the capital, wabi sabi stay Fixie Lofts arrived in 2020. It's just the kind of creatively minded, locally rooted project that's part of a sea change in the Caribbean right now.</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>9. HELSINKI, FINLAND</h3>
                        <img className="articleImage" src={helsinki} alt="helsinki" />
                        <p>Forget the magnificent architecture and superb waterfront dining spots, if there’s one thing Helsinki has in spades, its steely-eyed focus. In 2018, the city ploughed more than 99 million euros into its arts and culture scene, bolstering an already meaty offering of museums, concert venues and galleries. The result is a truly world-class cultural city – exciting enough to rival Cophenhagen and Stockholm – filled with genre-busting design spots and fringed by Baltic archipelagos which leave a satisfyingly salty taste in the air. The newest art museum Amos Rex – pooling like molten silver below the functionalist Lasipalatsi – is a place where art and urban culture combine, attracting some of the world’s most exciting artists.</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>8. AMAZON RAINFOREST </h3>
                        <img className="articleImage" src={amazon} alt="amazon" />
                        <p>Studies have shown that, when done well, eco-tourism is the most profitable long-term strategy for providing sustainable employment for locals and protecting the jungle and its fantastical flora and fauna. An adventure here means bedding down on local house boats, camping in the tangled, dew-soaked jungle, and visiting community schools and indigenous villages. That’s not to mention the huge amount of wildlife to be spotted, from rare pink dolphins to jaguars and chattering spider monkeys swooping through the tree canopy. Eco-lodges abound in the rainforest and new offerings for 2021 include Aqua Nera, the river-cruise outfit’s latest boat, which will glide along the piranha-filled Peruvian Amazon. Visit during the wet season (February to May), when waterway navigation is easier and you’ll find the riverbanks populated with migratory birds, while mating season brings the surrounding greenery alive with a cacophony of courtship sounds.</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>7. ACCRA, GHANA </h3>
                        <img className="articleImage" src={accra} alt="accra" />
                        <p>Few places on earth feel as energetic as Ghana right now, as its young creatives reimagine the country’s role on the global cultural scene. In the heady city of Accra, among the cool crowds and the burgeoning diaspora, there’s a growing sense of ownership of Ghanaian traditions when it comes to arts, music and fashion. Expect to find grains such as sorghum and millet on the menu, alongside imaginative offal and fine seafood, all executed with the boldness that encompasses this increasingly exciting city.</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>6. THE KIMBERLEY, AUSTRALIA </h3>
                        <img className="articleImage" src={kimberly} alt="kimberly" />
                        <p>Clinging to the far north-western reaches of Australia, the Kimberley is a sparsely settled place where the dust glows blood-red and aquamarine seas are teeming with sharks and saltwater crocodiles. Vast landscapes make this one of the most enticing adventure spots for 2021 – the region is almost three times the size of England, with fewer people per square metre than almost any other place on earth. Whether you’re heli-hiking to uncover ancient rock art, driving along the winding Gibb River Road or being pummelled by the waters of the mighty Horizontal Falls, marvel at the fact that these stirring landscapes have been well-trodden by Australia’s First Peoples for tens of thousands of years.</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>5. EL HIERRO, THE CANARY ISLANDS </h3>
                        <img className="articleImage" src={elhierro} alt="elhierro" />
                        <p>Shrugging off the archipelago's unwarranted package-holiday reputation, the lesser-known Canary Islands are stepping into the spotlight for 2021. The sun-blasted Spanish chain off Africa’s Atlantic coast – a network of black, white and butter-gold beaches – is home to awe-inspiring landscapes, from lush banana plantations to laurel forests. But instead of busy Gran Canaria and touristy Tenerife, it’s the smaller, more characterful spots that are rising to claim the Canaries’ must-visit mantle. La Palma, the most north-westerly island, has a clutch of Renaissance palaces, charming churches and a stone town hall made out of volcanic rock. But it’s the meandering coastal roads – passing expansive calderas and swaying forests of banana – as well as its quaint pitch-roofed houses of pinky-purple, mint green, azure and ochre that leave a lasting impression.</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>4. UNITED ARAB EMIRATES</h3>
                        <img className="articleImage" src={uae} alt="uae" />
                        <p>When it was announced that Dubai would be the site of the Middle East’s first World Expo, there was no doubt that the City of Gold would pull out all the stops. Billions were ploughed into a vast host site double the size of Hong Kong island, and various feats of engineering were put in place (including the steel-domed Al Wasl Plaza, which transforms into a 360-degree projection surface at the push of a button). What could not be anticipated, however, was that a global pandemic would set the entire project back a year. But 2020’s loss is 2021’s gain. Now it is slated to launch in October 2021, and all hands are on deck to ensure plans are as tight as a fiddle string.</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>3. MELIDES, PORTUGAL</h3>
                        <img className="articleImage" src={melides} alt="melides" />
                        <p>With pristine sands, tiny village squares and, well, very little else, Melides is Portugal but not as you know it. Right in the middle of the untouched Alentejo coast, this low-key rural hillside village is already being hailed as the new Comporta by those in the know. But there’s little in the way of boutique hotels and trendy art galleries here. Instead, deserted beaches and miles of vineyards, rice fields and cork oaks are slowly drawing in clued-up artists.</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>2. YORKSHIRE, ENGLAND, UK </h3>
                        <img className="articleImage" src={yorkshire} alt="yorkshire" />
                        <p>As well as being a (rather large) land of brooding moors and moody coastlines, Yorkshire has long been an important arty enclave, with its renowned sculpture triangle and a long love affair with heritage artists such as Henry Moore, David Hockney and Barbara Hepworth. But beyond the famous names, a real grassroots arts resurgence is underway in God’s Own County. Crumbling old mill sites, converted churches and arboretums are being repurposed, regenerated and filled with studios, artisanal shops and restaurants. Holmbridge Mill – a redeveloped textile mill in pretty Holmfirth – is developing a new studio space for lease to local sculptors, painters and illustrators. Creative takeovers are also planned for Left Bank Leeds, a lofty-ceilinged converted Grade II-listed church, and London-based gallerist Johnny Messum recently set up a new outpost in Harrogate, while Leeds’ multi-million bid for an international cultural festival in 2023 means focus is firmly set on the county’s ever-evolving artistic credentials.</p>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="articleSection">
                        <h3>1. SLOVENIA </h3>
                        <img className="articleImage" src={slovina} alt="slovina" />
                        <p>It’s somewhat mind-boggling that Slovenia – tucked between old favourites Italy and Croatia – hasn’t been overrun already. After all, its turquoise rivers, glacier-fed lakes and soaring, snow-capped peaks are pretty enough to make even seen-it-all sorts weak at the knees. The country's most famous landmark, Lake Bled, is more peaceful than any of Europe's better-known lakes. But for now, at least, it remains blissfully unbusy; a place of wide-open spaces, splendid solace and restoratively pristine air. But it’s the sustainable food practices and carefully considered old-world techniques that mean Slovenia is making itself known as a big-hitting foodie hotspot.</p>
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
                            <Link to={`/article2`}>
                                <button className="button">Next Article</button>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}