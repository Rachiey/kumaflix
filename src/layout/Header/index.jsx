import React from 'react';
import { NavLink } from 'react-router-dom';
import { BackButton } from '../../components';
import './style.css'
import logo from '../../../src/kumaflix.png';


export const Header = () => {
    return(
        
        <nav>
            <div className='border'>
                <img className='logo'src={logo} />
            </div>

            {/* <NavLink className="kumaFlix" exact to='/'>Kumaflix</NavLink>
            <NavLink exact to='/'>Home</NavLink> */}
            <BackButton className="backButton" />
            <div className="dropdown">
                <button className="dropbtn">Profiles</button>
                <div className="dropdown-content">
                <NavLink to='/rilakkuma'>Rilakkuma</NavLink>
                <NavLink to='/korilakkuma'>Korilakkuma</NavLink>
                <NavLink to='/kiiroitori'>Kiiroitori</NavLink>
                <NavLink to='/chairoikoguma'>Chairoikoguma</NavLink>
                </div>
            </div>
        </nav>
    )
};