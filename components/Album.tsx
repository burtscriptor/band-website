'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../app/styles/Album.module.css';
interface AlbumDetailProps {
  title: string;
  date: string;
  recording_technique: string;
  id: number;
  cover_url: string;
}

const Album: React.FC<AlbumDetailProps & { className?: string }> = ({ className, title, date, recording_technique, id, cover_url }) => {

  return (

    <Link className={className ? styles[className] : ''} key={id} onMouseEnter={console.log()} href={`/discography/${id}`} >
        <img src={cover_url} alt="Album cover" />
        <p>{title}</p>
        <p>{date}</p>
    </Link>
  )
};

export default Album;



// For displaying album information on the discography page
// Wrap in a link tag to the direct page
// Name, release date, image

// need to make sure the types are correct because they are only stated here
// and not in the types file?