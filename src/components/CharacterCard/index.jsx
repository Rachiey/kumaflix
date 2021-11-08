import React from 'react';
import { Cover } from '../../stories/assets/covers/Covers'
import './style.css';




export const CharacterCard = ({size, name, image }) => {
   
    return (
        <div className={`card ${size}`}>
          

            <Cover image={image} />
            <h3>{name}</h3>
        
        </div>
    )
}
