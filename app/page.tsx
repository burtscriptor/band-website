'use client';

import { useData } from "./context/DataContext";
import Styles from "./page.module.css";
import RecentAlbums from "@/components/RecentAlbums";
import SpotifyTopSongs from "@/components/SpotifyTopSongs";
import { DataContextType } from "@/types/types";
import { useEffect, useState } from "react";

export default function Home() {
  const useContext: DataContextType = useData();
  const [albums, setAlbums] = useState([]);
  const [spotifyData, setSpotifyData] = useState([]);


  const getData = () => {
    const storedData = localStorage.getItem('data');

    if (storedData) {

      const parsed = JSON.parse(storedData);
      const isStale = Date.now() - parsed.timeStamp > 1000 * 60 * 60;

      if (!isStale) {

        setAlbums(parsed.albums);

      } else {

        setAlbums(useContext.albums || []);

      }

      setSpotifyData(useContext.spotifyData || []);

    } else {
      
      setAlbums(useContext.albums);
      setSpotifyData(useContext.spotifyData || []);
      localStorage.setItem('data', JSON.stringify({
        'albums': useContext.albums,
        'spotifySongs': useContext.spotifyData,
        'timeStamp': Date.now()

      }))

    }

  };


  useEffect(() => {
    getData();
  }, [])

  return (
    <div className={Styles.pageContainer}>
      <div className={Styles.lowerContainer}>
        <SpotifyTopSongs tracks={spotifyData || []} />
        <RecentAlbums albums={albums || []} />
        <div><p>Hey There Content coming soon</p></div>
      </div>
      <div className={Styles.upperContainer}></div>
    </div>
  );
}

