import React from 'react'

interface PlayLinksProps {
    link1: string;
    link2: string;
}

const PlayLinks: React.FC<PlayLinksProps> = ({ link1, link2 }) => {
    return (
        <div>
            <a href={link1} target="_blank" rel="noopener noreferrer">
                <p>Play on Spotify</p>
            </a>
            <a href={link2} target="_blank" rel="noopener noreferrer">
                <p>Play on Bandcamp</p>
            </a>

        </div>
    )
};

export default PlayLinks;
