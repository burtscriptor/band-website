'use client';
// do i need this line?


import React from 'react';
import PlayLinks from './PlayLinks';

interface AlbumDetailProps {
    title: string;
    recorded: string;
    released: string;
    recording_technique: string;
    creative_process: string;
    id: number;
    image_url: string;
};

const AlbumDetail: React.FC<AlbumDetailProps> = ({
    id,
    image_url,
    title,
    creative_process,
    recorded,
    released,
    recording_technique,
}) => {
    return (
        <div key={id}>
            <img src={image_url} width={100} height={100} alt="Album cover" />
            <p>Title: {title}</p>
            <p>Album number: {id}</p>
            {creative_process ? <p>Creative process: {creative_process}</p> : ""}
            {recorded ? <p>Recorded: {recorded}</p> : ""}
            {released ? <p>Released: {released}</p> : ""}
            <p>Recording_technique: {recording_technique}</p>
            <p>Tracklist: </p>
            <PlayLinks link1={""} link2={""}/>
            
        </div>
    )
};

export default AlbumDetail;

// Need links to spotify play

// For displaying album information on the discography page
// Wrap in a link tag to the direct page
// Name, release date, image

// need to make sure the types are correct because they are only stated here
// and not in the types file?