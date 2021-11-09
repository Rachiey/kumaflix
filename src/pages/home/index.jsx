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
    image="https://blog.yumetwins.com/wp-content/uploads/2021/06/931b49dc9a81478be91c4ec6c3e8906b6f846012_kiiroitori.jpg"

    />
    </div>
    </Link>

    <Link to='/chairoikoguma'>
    <div className="ChairoikogumaCard">
    <CharacterCard
    name="Chairoikoguma"
    size="small"
    image="https://stickershop.line-scdn.net/stickershop/v1/product/19873/LINEStorePC/main.png;compress=true"

    />
    </div>
    </Link>

    </div>

    </>
)
}
