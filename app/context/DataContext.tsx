'use client';
import React, { createContext, useContext, useState } from 'react';
import { supabase } from "../../lib/supabase";

const DataContext = createContext<{
    albums: any[];
    setAlbums: (albums: any[]) => void;

  spotifyData: any;
  setSpotifyData: (data: any) => void;

} | null>(null);

export function DataProvider({ children, initialData }: { children: React.ReactNode; initialData: any }) {
  const [albums, setAlbums] = useState<any[]>(initialData.albums);
  const [spotifyData, setSpotifyData] = useState<any>(initialData.spotify);

  return <DataContext.Provider value={{ albums, setAlbums, spotifyData, setSpotifyData }}>{children}</DataContext.Provider>
};

export function useData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};

export function generateCreativeProcess() {
    const { albums } = useData();

    if (!albums) return [];

    const result = albums.reduce((acc: string[], album) => {
        if (!acc.includes(album.creative_process)) {
            acc.push(album.creative_process);
        }
        return acc;
    }, [])
    return result;
};




