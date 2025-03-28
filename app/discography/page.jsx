'use client';

import React, { useEffect } from 'react';
import styles from '../styles/Discography.module.css';
import Album from '../../components/Album';
import SearchBar from '@/components/SearchBar';
import { useData } from '../context/DataContext';

export default function Discography() {
  const { albums, filter } = useData();


  const discography = !filter ? albums.map((album) => {
    return (
      <Album
      className='albumTile'
        title={album.title}
        date={album.released ? album.released : album.recorded}
        recording_technique={album.recording_technique}
        id={album.id}
        key={album.id}
        cover_url={album.cover_url}
      />
    )
  }): "";


  return (
    <div className={styles.discographyContainer}>
      <h1>Discography</h1>
      <SearchBar />
      <div className={styles.grid}>{discography}</div>
    </div>
  )
};

// General
// need to set the function on as a React.FC, that accepts props
// need to define type of props
// pass props supabase albums as props
// wrap each in a link tag to /discography/{id} - which is another page with a component?
// map through props and display albums

// Search Component

//Album component
// make a component for the album tiles and then pass the props down to 
// so data.map((album)=> {
// <AlbumTile name={album.name} etc />
//})
