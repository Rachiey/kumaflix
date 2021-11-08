import React, {useState } from 'react';
import { Cover } from '../../stories/assets/covers/Covers'
import './style.css';



export const Card = ({size, netflixTitle, netflixType, synopsis, image }) => {
    const [ showSynopsis, setShowSynopsis ] = useState(false);

    const handleMouseEnter = () => setShowSynopsis(true);
    const handleMouseLeave = () => setShowSynopsis(false);

    return (
        <div className={`card ${size}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <Cover image={image} />
            <h3>{netflixTitle}</h3>
            <em>{netflixType}</em>
            <h4> {showSynopsis ? synopsis: "See more..."}</h4>
        </div>
    )
}
