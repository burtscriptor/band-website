'use client';

import { useData } from "./context/DataContext";
import Styles from "./page.module.css";
import RecentAlbums from "@/components/RecentAlbums";
import SpotifyTopSongs from "@/components/SpotifyTopSongs";
import { AlbumType, SpotifyTrack } from "@/types/types";
import { useEffect, useState } from "react";

export default function Home() {
  const dataContext = useData(); 
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [spotifyData, setSpotifyData] = useState<SpotifyTrack[]>([]);

  const getData = () => {
    const storedData = localStorage.getItem("data");

    if (storedData) {
      const parsed = JSON.parse(storedData);
      const isStale = Date.now() - parsed.timeStamp > 1000 * 60 * 60;

      if (!isStale) {
        setAlbums(parsed.albums);
      } else {
        setAlbums(dataContext.albums);
      }

      setSpotifyData(dataContext.spotifyData);
    } else {
      setAlbums(dataContext.albums);
      setSpotifyData(dataContext.spotifyData);

      localStorage.setItem(
        "data",
        JSON.stringify({
          albums: dataContext.albums,
          spotifySongs: dataContext.spotifyData,
          timeStamp: Date.now(),
        })
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={Styles.pageContainer}>
      <div className={Styles.lowerContainer}>
        <SpotifyTopSongs tracks={spotifyData} />
        <RecentAlbums albums={albums} />
        <div>
          <p>Hey There Content coming soon</p>
        </div>
      </div>
      <div className={Styles.upperContainer}></div>
    </div>
  );
}
