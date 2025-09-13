'use client';
// do i need this line?


import React from 'react';
import PlayLinks from './PlayLinks';
import styles from '@/app/styles/Discography.module.css'

interface AlbumDetailProps {
    title: string;
    recorded: string;
    released: string;
    recording_technique: string;
    creative_process: string;
    id: number;
    image_url: string;
    spotify_album_id: string;
    bandcamp_id: string;
};

const AlbumDetail: React.FC<AlbumDetailProps> = ({
    id,
    title,
    creative_process,
    image_url,
    recorded,
    released,
    recording_technique,
    spotify_album_id,
    bandcamp_id
}) => {

    const noEmbeddedPlayer = <p className={styles.noPlayerMessage}>This is exclusive content not published on Spotify or Bandcamp, 
    contact us on socials for listening options.</p>

    const embeddedPlayer = () => {
       return spotify_album_id !== null ?  spotifyPlayer() : bandcamp_id !== '' ? bandcampPlayer() : noEmbeddedPlayer;
    }

    const bandcampPlayer = ()=> {
        return <iframe style="border: 0; width: 350px; height: 588px;" 
        src="https://bandcamp.com/EmbeddedPlayer/album=1111700985/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/" 
        seamless><a href="https://wollongong.bandcamp.com/album/clown-mountain">Clown Mountain by Wollongong</a>
        </iframe>
    };

    const spotifyPlayer = ()=> {
        return <iframe data-testid="embed-iframe" 
            src={`https://open.spotify.com/embed/album/${spotify_album_id}?utm_source=generator`} 
            width="100%" height="352" frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
            </iframe>
    };

    console.log('image src', image_url);
    console.log('spotify_id:', spotify_album_id)
    return (
        <div className={styles.detailChildren}key={id}>
            <p className={styles.pretitle}>Album: {id}</p>
            <p className={styles.title}>{title}</p>
            {recorded ? <p className={styles.detailLabel}><span>Recorded:</span> {recorded}</p> : ""}
            {released ? <p className={styles.detailLabel}><span>Released:</span> {released}</p> : ""}
            <img className={styles.detailAlbumCover} src={image_url} width={608} height={608} alt="Album cover" />
            <p className={`${styles.detailLabel} ${styles.marginBottom}`}><span>Creative process:</span> {creative_process !== null ? creative_process : 'Lost to the sands of time.' }</p> 
            <p className={`${styles.detailLabel} ${styles.marginBottom}` }><span>Recording environment:</span> {recording_technique !== null ? recording_technique : 'Lost to the sands of time.'}</p>
            <p className={`${styles.detailLabel} ${styles.marginBottom}`}><span>Tracklist:</span> BYO</p>
            <div>{embeddedPlayer()}</div>

            <PlayLinks spotify_album_id={spotify_album_id} bandcamp_id={bandcamp_id} />

        </div>
    )
};

export default AlbumDetail;
