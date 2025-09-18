'use client';

import React, { useEffect, useState } from 'react';
import styles from '../styles/Discography.module.css';
import Album from '../../components/Album';
import SearchBar from '@/components/SearchBar';
import { useData } from '../context/DataContext';

export default function Discography() {
  const dataContext = useData();
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [filter, setFilter] = useState();

  const getData = () => {
    const storedData = localStorage.getItem('data');

    if (storedData) {
      const parsed = JSON.parse(storedData);

      const isStale = Date.now() - parsed.timeStamp > 1000 * 60 * 60; // 1 hour
      if (!isStale) {
        setAlbums(parsed.albums);
        setFilteredAlbums(parsed.albums);
        console.log('not stale', parsed.timeStamp);
      } else {
        setAlbums(dataContext.albums || []);
        setFilteredAlbums(dataContext.albums || []);
        console.log('stale', parsed.timeStamp);
      }
    } else if (dataContext) {
      setAlbums(dataContext.albums || []);
      setFilteredAlbums(dataContext.albums || []);
      setFilter(dataContext.filter || null);

      localStorage.setItem(
        'data',
        JSON.stringify({
          albums: dataContext.albums,
          timeStamp: Date.now(),
        })
      );
    }
  };

  const filterFunction = (y, c, r) => {
 
    let result = [...albums];

    if (y && y !== "Clear") {
      result = result.filter((a) => {
        if (a.recorded) {
          return a.recorded.includes(y);
        } else if (a.released) {
          return a.released.includes(y);
        }
        return false;
      });
    }
    if (c && c !== 'Clear') result = result.filter((a) => a.creative_process === c);
    if (r && r !== 'Clear') result = result.filter((a) => a.recording_technique === r);

    setFilteredAlbums(result);
    console.log('result', result)
  };

  useEffect(() => {
    console.log('useEffct on disco page.tsx')
    getData();
  }, []);


const discography = filteredAlbums.map((album, i) => {

  return (
    <Album
      className="albumTile"
      title={album.title}
      date={album.released ? album.released : album.recorded}
      recording_technique={album.recording_technique}
      id={album.id}
      key={album.id}
      image_url={album.image_url}
      spotify_album_id={album.spotify_album_id}
      bandcamp_id={album.bandcamp_id}
      bandcamp_page_url={album.bandcamp_page_url}
      priority={i < 10}
    />
)});

  return (
    <div className={styles.discographyContainer}>
      <SearchBar filterFunction={filterFunction} albums={albums} filteredAlbums={filteredAlbums} />
      <div className={styles.grid}>{discography}</div>
    </div>
  );
}
