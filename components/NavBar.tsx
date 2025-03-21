'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from '../app/styles/NavBar.module.css'

const NavBar: React.FC = ()=> {
  return (
    <>
   
    
    <div className={Styles.navContainer}>
    <Link href="/">
    <h1>GONG</h1>
    </Link>
    <Link href="/discography">Discography</Link>
      <Link href="/">Home</Link>
     
      {/* <Link href="/about">About</Link> */}
      <Link href="/multimedia">Media</Link>
      {/* <Link href="/contact">Contact</Link> */}
    </div>
    </>
  );
}

export default NavBar;
