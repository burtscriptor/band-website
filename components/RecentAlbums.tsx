
import React from 'react';
import { AlbumType } from '@/types/types';
import Album from './Album';
import Styles from '../app/styles/Home.module.css'

interface RecentAlbumsProps {
  albums: AlbumType[];
}


const RecentAlbums: React.FC<RecentAlbumsProps> = ({ albums }) => {
    const mostRecent = albums.slice(0,3);

    const result =  mostRecent.map((album)=> (
      <Album className="homeTile"
      title={album.title}
      date={album.released ? album.released : album.recorded}
      recording_technique={album.recording_technique}
      id={album.id}
      key={album.id}
      image_url={album.image_url}
      />
    ))
   

  return (
    <>

    <div className={Styles.container}>
    <div className={Styles.title}>
    <h2>Recent Offerings</h2>
    </div>
    <div className={Styles.homeContainer}>
      
     {result}
    </div>
    </div>
    </>
  )
};

export default RecentAlbums;

// Presentation
// Album cover, wrapped in Link tag with link to album/id
// also link to spotify band, but album would be better
