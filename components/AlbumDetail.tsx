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
    recorded_at: string;
    notes: string;
    id: number;
    cover_url: string;
};

const AlbumDetail: React.FC<AlbumDetailProps> = ({
    title,
    id,
    creative_process,
    recorded,
    released,
    recording_technique,
    recorded_at,
    notes,
    cover_url
}) => {
    return (
        <div key={id}>
            <img src={cover_url} width={100} height={100} alt="Album cover" />
            <p>Title: {title}</p>
            <p>Album number: {id}</p>
            <p>Creative process: {creative_process}</p>
            {recorded ? <p>Recorded: {recorded}</p> : ""}
            {released ? <p>Released: {released}</p> : ""}
            {recorded_at ? <p>Recorded at: {recorded_at}</p> : ""}
            <p>Recording_technique: {recording_technique}</p>
            <p>Tracklist: </p>
            {notes ? <p>Notes: {notes}</p> : ""}
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