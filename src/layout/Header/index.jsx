import React from 'react';
import { NavLink } from 'react-router-dom';
import { BackButton } from '../../components';
import './style.css'

export const Header = () => {
    return(
        
        <nav>
            <NavLink className="kumaFlix" exact to='/'>Kumaflix</NavLink>
            <NavLink exact to='/'>Home</NavLink>
            <BackButton className="backButton" />
            <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                <NavLink to='/rilakkuma'>Rilakkuma</NavLink>
                <NavLink to='/korilakkuma'>Korilakkuma</NavLink>
                <NavLink to='/kiiroitori'>Kiiroitori</NavLink>
                <NavLink to='/chairoikoguma'>Chairoikoguma</NavLink>
                </div>
            </div>
        </nav>
    )
};