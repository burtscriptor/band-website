
import React from 'react';
import { AlbumType } from '@/types/types';
import Album from './Album';

interface RecentAlbumsProps {
  albums: AlbumType[];
}


const RecentAlbums: React.FC<RecentAlbumsProps> = ({ albums }) => {
    const mostRecent = albums.slice(0,3);
   

  return (
    <div>
      <h2>Recent albums</h2>
      {mostRecent.map((album)=> (
        <Album   
        title={album.title}
        date={album.released ? album.released : album.recorded}
        recording_technique={album.recording_technique}
        id={album.id}
        key={album.id}
        cover_url={album.cover_url}
        />
      ))}
    </div>
  )
};

export default RecentAlbums;

// Presentation
// Album cover, wrapped in Link tag with link to album/id
// also link to spotify band, but album would be better
