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
    bandcamp_page_url: string;
};

interface PlayLinks {
    bandcamp_id: string;
    bandcamp_page_url: string;
}

const AlbumDetail: React.FC<AlbumDetailProps> = ({
    id,
    title,
    creative_process,
    image_url,
    recorded,
    released,
    recording_technique,
    spotify_album_id,
    bandcamp_id,
    bandcamp_page_url
}) => {
console.log('ad bancamp page url:', bandcamp_page_url)
    const noEmbeddedPlayer = <p className={styles.noPlayerMessage}>This is exclusive content not published on Spotify or Bandcamp,
        contact us on socials for listening options.</p>

    const embeddedPlayer = () => {
        return spotify_album_id !== null ? spotifyPlayer() : bandcamp_id !== '' ? bandcampPlayer() : noEmbeddedPlayer;
    }
    //style="border: 0; width: 350px; height: 588px;"
    const bandcampPlayer = () => {
        return <iframe
            src={`https://bandcamp.com/EmbeddedPlayer/album=${bandcamp_id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/artwork=small/transparent=true/`}
            width="100%"
            height="120px"
            allow="autoplay; encrypted-media"
            seamless><a href={`https://wollongong.bandcamp.com${bandcamp_page_url}`}>{title}</a>
        </iframe>
    };

    const spotifyPlayer = () => {
        return <iframe data-testid="embed-iframe"  src={`https://open.spotify.com/embed/album/${spotify_album_id}?utm_source=generator`} width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    };

    console.log('image src', image_url);
    console.log('spotify_id:', spotify_album_id)
    console.log('player:', embeddedPlayer())
    return (
        <div className={styles.detailChildren} key={id}>
            <div className={styles.titleAndDates}>
                <p className={styles.pretitle}>Album: {id}</p>
                <p className={styles.title}>{title}</p>
                {recorded ? <p className={styles.detailLabel}><span>Recorded:</span> {recorded}</p> : ""}
                {released ? <p className={styles.detailLabel}><span>Released:</span> {released}</p> : ""}
            </div>
            <div className={styles.imageAndDetails}>
                <img className={styles.detailAlbumCover} src={image_url} width={608} height={608} alt="Album cover" />
                <div>{embeddedPlayer()}</div>
                <PlayLinks spotify_album_id={spotify_album_id} bandcamp_id={bandcamp_id} bandcamp_page_url={bandcamp_page_url} />
                <p className={`${styles.detailLabel} ${styles.marginBottom}`}><span>Creative process:</span> {creative_process !== null ? creative_process : 'Lost to the sands of time.'}</p>
                <p className={`${styles.detailLabel} ${styles.marginBottom}`}><span>Recording environment:</span> {recording_technique !== null ? recording_technique : 'Lost to the sands of time.'}</p>
                <p className={`${styles.detailLabel} ${styles.marginBottom}`}><span>Tracklist:</span> BYO</p>
               

               
            </div>
        </div>
    )
};

export default AlbumDetail;
