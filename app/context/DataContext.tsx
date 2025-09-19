'use client';
import React, { useEffect, createContext, useContext, useState } from 'react';
import { supabase } from "../../lib/supabase";

type UserFilters = {
  year: string;
  creative_process: string;
  location: string;
  recording_type: string;
  personnel: string;
};

const DataContext = createContext<{
  albums: any[];
  setAlbums: (albums: any[]) => void;

  filter: boolean;
  setFilter: (filter: boolean) => void;

  userFilters: UserFilters;
  setUserFilters: (userFilters: UserFilters) => void;

  spotifyData: any;
  setSpotifyData: (data: any) => void;
} | null>(null);

export function DataProvider({ children, initialData }: { children: React.ReactNode; initialData: any }) {
  const [albums, setAlbums] = useState<any[]>(initialData.albums);
  const [spotifyData, setSpotifyData] = useState<any>(initialData.spotify);

  // ✅ add the missing states
  const [filter, setFilter] = useState<boolean>(false);
  const [userFilters, setUserFilters] = useState<UserFilters>({
    year: "",
    creative_process: "",
    location: "",
    recording_type: "",
    personnel: "",
  });

  return (
    <DataContext.Provider
      value={{
        albums,
        setAlbums,
        spotifyData,
        setSpotifyData,
        filter,
        setFilter,
        userFilters,
        setUserFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

export function generateCreativeProcess() {
  const { albums } = useData();

  if (!albums) return [];

  const result = albums.reduce((acc: string[], album) => {
    if (!acc.includes(album.creative_process)) {
      acc.push(album.creative_process);
    }
    return acc;
  }, []);
  return result;
}
