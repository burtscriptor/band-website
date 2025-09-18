'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from '../app/styles/NavBar.module.css'
import { usePathname } from 'next/navigation';
import SocialMediaIcons from './SocialMediaIcons';

const NavBar: React.FC = () => {
  const params = usePathname();
  let pathName = params === '/' ? '/home' : params.includes('discography/') ? '/discography' : params; 
  const cleanedPathName = pathName.slice(1);
  console.log('params', params);
  console.log('cleanedpathName', cleanedPathName)


//  const pages = ['discography', 'home', 'multimedia'].filter(
  const pages = ['discography'].filter(
    (page) => page !== cleanedPathName
  );

  const navLinks = pages.map((page, i) => {
    const destination = page === 'home' ? '/' : page;
   return <div className={Styles.linkContainer}><Link key={i} href={`${destination}`}>
      {page.charAt(0).toUpperCase() + page.slice(1)}
    </Link></div>
});

  return (
    <div className={Styles.navContainer}>

      <div className={Styles.titleContainer}>
        <Link className={Styles.title} href="/discography">WOLLONGONG</Link>
        <p>The</p>
        <p>Band</p>
      </div>

      <div className={Styles.navLinks}>
      {navLinks[0]}
      <div className={Styles.linkContainer}>
      <Link className={Styles.currentPage} href={pathName}>{cleanedPathName.charAt(0).toUpperCase() + cleanedPathName.slice(1)}</Link> 
      </div>    
    {navLinks[1]}
    </div>

      
    </div>
  );
}

export default NavBar;
