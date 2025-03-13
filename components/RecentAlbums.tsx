
import React from 'react';
import { Album } from '@/types/types';

interface RecentAlbumsProps {
  albums: Album[];
}


const RecentAlbums: React.FC<RecentAlbumsProps> = ({ albums }) => {
    const mostRecent = albums.slice(1);
   

  return (
    <div>
      {mostRecent.map((album)=> (
        <li key={album.id}>{album.title}</li>
      ))}
    </div>
  )
};

export default RecentAlbums;

// Presentation
// Album cover, wrapped in Link tag with link to album/id
// also link to spotify band, but album would be better
