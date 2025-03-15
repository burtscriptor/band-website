import React from 'react'

interface SpotifySongProps {
    name: string;
    image: string;
    url: string;
    album: string;
}

const SpotifySong: React.FC<SpotifySongProps> = ({ name, image, url, album }) => {
    return (
        <div key="name">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={image} alt="Album Cover" />
                <p>{name}</p>
                <p>From {album}</p>
            </a>
        </div>
    )
}

export default SpotifySong;
