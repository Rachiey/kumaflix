import React from 'react';
import { CharacterCard } from '../../components/';
import './style.css';

const characterCards= [
    { name: "Rilakkuma", image: "https://image.winudf.com/v2/image1/anAuY28uaW1hZ2luZWVyLnJpbGFra3VtYS5mYXJtX2ljb25fMTYxNzAxMDg2Nl8wNzE/icon.png?w=&fakeurl=1"},
    { name: "Korilakkuma", image: "https://pbs.twimg.com/profile_images/1037908849150185474/lR5upf-n_400x400.jpg"},
    { name: "Kiiroitori", image: "https://blog.yumetwins.com/wp-content/uploads/2021/06/931b49dc9a81478be91c4ec6c3e8906b6f846012_kiiroitori.jpg"},
    { name: "Chairoikoguma", image: "https://stickershop.line-scdn.net/stickershop/v1/product/19873/LINEStorePC/main.png;compress=true"},
]


export const Home = () => {
    const renderCharacterCards = () => characterCards.map((p, i) => {
    return (
        <div key ={i} className="characters">
            <div className="characterCards">
                <CharacterCard name={p.name} image={p.image} />


            </div>
        </div>
    )
});

return (
    <>
    <h1 className="kumaFlixTitle"> Kumaflix</h1>
    <h1 className="netflixHeading">Who's watching?</h1> 
    <section id="characters">
    
        {/* { renderCharacterCards() } */}

        <CharacterCard
  name="Rilakkuma"
  size="small"
  image="https://image.winudf.com/v2/image1/anAuY28uaW1hZ2luZWVyLnJpbGFra3VtYS5mYXJtX2ljb25fMTYxNzAxMDg2Nl8wNzE/icon.png?w=&fakeurl=1"


/>

<CharacterCard
  name="Korilakkuma"
  size="small"
  image="https://pbs.twimg.com/profile_images/1037908849150185474/lR5upf-n_400x400.jpg"

/>

<CharacterCard
  name="Kiiroitori"
  size="small"
  image="https://blog.yumetwins.com/wp-content/uploads/2021/06/931b49dc9a81478be91c4ec6c3e8906b6f846012_kiiroitori.jpg"

/>

<CharacterCard
  name="Chairoikoguma"
  size="small"
  image="https://stickershop.line-scdn.net/stickershop/v1/product/19873/LINEStorePC/main.png;compress=true"

/>


    </section>
    </>
)
}
