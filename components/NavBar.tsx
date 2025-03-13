'use client'

import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = ()=> {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/discography">Discography</Link>
      <Link href="/about">About</Link>
      <Link href="/multimedia">Multimedia</Link>
    </div>
  );
}

export default NavBar;
