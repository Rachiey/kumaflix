import React from 'react';
import { CharacterCard } from '../../components/';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../../src/kumaflix.png';




export const Home = () => {

return (
    <>
<div className='border'>
    <img className='logo'src={logo} />
</div>


<h1 className="netflixHeading">Who's watching?</h1> 
   <div className="characterGrid">

    <Link to='/rilakkuma'>
    <div className="RilakkumaCard">
            <CharacterCard
    name="Rilakkuma"
    size="small"
    image="https://image.winudf.com/v2/image1/anAuY28uaW1hZ2luZWVyLnJpbGFra3VtYS5mYXJtX2ljb25fMTYxNzAxMDg2Nl8wNzE/icon.png?w=&fakeurl=1"


    />
    </div>
    </Link>

    <Link to='/korilakkuma'>
    <div className="KorilakkumaCard">
    <CharacterCard
    name="Korilakkuma"
    size="small"
    image="https://pbs.twimg.com/profile_images/1037908849150185474/lR5upf-n_400x400.jpg"

    />
    </div>
    </Link>

    <Link to='/kiiroitori'>
    <div className="KiiroitoriCard">
    <CharacterCard
    name="Kiiroitori"
    size="small"
    image="https://cdn.myanimelist.net/images/characters/5/406171.jpg"

    />
    </div>
    </Link>

    <Link to='/chairoikoguma'>
    <div className="ChairoikogumaCard">
    <CharacterCard
    name="Chairoikoguma"
    size="small"
    image="https://preview.redd.it/m2tnhqlzgu281.jpg?auto=webp&s=f9e34b330df1027ee8afef059807861f75f50457"

    />
    </div>
    </Link>

    </div>

    </>
)
}
