'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../app/styles/Album.module.css';
import { usePathname } from 'next/navigation';

interface AlbumDetailProps {
  title: string;
  date: string;
  recording_technique: string;
  id: number;
  image_url: string;
  spotify_id: string;
  bandcamp_id: string;
  bandcamp_page_url: string;
}

const Album: React.FC<AlbumDetailProps & { className?: string }> = ({
   className, title, date, id, image_url
   }) => {
    const params = usePathname();
    const discographyPage = params.includes('discography') ? true : false;
    // console.log('discographyPage', discographyPage)
    // console.log('classname', className)

  return (
    <Link className={className ? styles[className] : ''} key={id} href={`/discography/${id}`} >
  <div className={className ?  `${styles.titleAndDate}` : ''}>    
    <p className={className ?  `${styles.discoDate}` : ''}>{date}</p>  
    <p className={className ?  `${styles.discoTitle}` : ''}>{title}</p>
    
    </div>
    <div className={className ?  `${styles[className]} ${styles.imgContainer}` : ''} >
    <img src={image_url} alt={`Album cover for ${title}`}  />
    </div>
        
    </Link>
  )
};

export default Album;
