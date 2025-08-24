'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import { useData } from '@/app/context/DataContext';
import AlbumDetail from '@/components/AlbumDetail';

const page = () => {
  const { albums } = useData();
  const params = useParams();
  const id = parseInt(params.albumId, 10); // how will this handle 101 etc?
  
  const result = albums.filter((album)=> album.id === id);
 
  return (
    <div>
    
      <AlbumDetail 
        title={result[0].title}
        id={result[0].id}
        creative_process={result[0].creative_process}
        recorded={result[0].recorded}
        released={result[0].released}
        recording_technique={result[0].recording_technique}
        image_url={result[0].cover_url}
      />
    </div>
  )
};

export default page;

// Album detail page accessed by clicking on the album tile in the discography page
// and using params? to then search supabase data via ID to return all the information we want
// Display the following information
// recording method
// album name
// recorded and release dates
// tracklist
// personell
// notes
// artwork
// link back to discography
// link to spotify of album - so to do this we probably need to make an api call to spotify
// footer


// if album.released ? "this element" : ""