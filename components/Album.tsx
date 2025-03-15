'use client';

import React from 'react';
import Link from 'next/link';

interface AlbumDetailProps {
  title: string;
  date: string;
  recording_technique: string;
  id: number;
  cover_url: string;
}

const Album:React.FC<AlbumDetailProps> = ({ title, date, recording_technique, id, cover_url }) => {
  return (
    <Link href={`/discography/${id}`}>
    <div key={id}>
    <img src={cover_url} width={100} height={100} alt="Album cover" />
      <p>{id} {title}</p>
     
    </div>
    </Link>
  )
};

export default Album;

// For displaying album information on the discography page
// Wrap in a link tag to the direct page
// Name, release date, image

// need to make sure the types are correct because they are only stated here
// and not in the types file?