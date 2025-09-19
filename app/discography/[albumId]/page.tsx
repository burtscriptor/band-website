'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import { useData } from '@/app/context/DataContext';
import AlbumDetail from '@/components/AlbumDetail';
import styles from '@/app/styles/Discography.module.css'

const page = () => {
  const { albums } = useData();
  const params = useParams();
  const id = parseInt(params.albumId, 10); // how will this handle 101 etc?
  
  const result = albums.filter((album)=> album.id === id);
 
  return (
    <div className={styles.detailParentContainer}>
    
      <AlbumDetail 
        title={result[0].title}
        id={result[0].id}
        creative_process={result[0].creative_process}
        recorded={result[0].recorded}
        released={result[0].released}
        recording_technique={result[0].recording_technique}
        image_url={result[0].image_url}
        spotify_album_id={result[0].spotify_album_id}
        bandcamp_id={result[0].bandcamp_id}
        bandcamp_page_url={result[0].bandcamp_page_url}
      />

    </div>
  )
};

export default page;
