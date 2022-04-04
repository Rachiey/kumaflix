import React from 'react';
import { Card, LikeButton } from '../../components/';
import './style.css';

const kiiFilms = [
    { netflixTitle: "Hana's Lazy Meals", netflixType: "TV Show",  synopsis: "After Hana Komazawa's (Kana Kurashina) is transfered to another city for work, Hana Komazawa begins making and eating zubora meshi (sloppy meals) which doesn't need much work.", image: "https://asianwiki.com/images/9/98/Hana_no_Zubora_Meshi-p2.jpg"},
    { netflixTitle: "Spirited Away", netflixType: "Movie",  synopsis: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.", image: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"},
    { netflixTitle: "Mr Bean", netflixType: "TV Show",  synopsis: "The series centres on Mr. Bean, a child in a grown man's body, as he solves various problems presented by everyday tasks and often causes disruption in the process.", image: "https://static.miraheze.org/besttvshowswiki/thumb/2/2c/Mr_bean.jpg/330px-Mr_bean.jpg" },
]


export const Kiiroitori = () => {
    const renderKiiFilms = () => kiiFilms.map((p, i) => {
        return (
            <div key ={i} className="films">
                <div className="greyBox">
                    <Card netflixTitle={p.netflixTitle} netflixType={p.netflixType} synopsis={p.synopsis} image={p.image} />
                    <LikeButton />
    
    
                </div>
            </div>
        )
    });

    return (
        <>
        <h1 className="kiiroitoriTitle"> Kiiroitori's Favourite Films </h1>
        <section id="films">
           
            { renderKiiFilms() }
        </section>
        </>
    )
}