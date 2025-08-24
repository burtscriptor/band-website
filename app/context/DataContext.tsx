'use client';
import React, { useEffect } from 'react';
import { supabase } from "../../lib/supabase";

type UserFilters = {
    year: string;
    creative_process: string;
    location: string;
    recording_type: string;
    personnel: string;
};
import { createContext, useContext, useState } from 'react';

const DataContext = createContext<{
    albums: any[];
    setAlbums: (albums: any[]) => void;

    filter: boolean;
    setFilter: (filter: boolean) => void;

    userFilters: any;
    setUserFilters: (userFilters: UserFilters) => void;

    spotifyData: any;
    setSpotifyData: (data: any) => void;

} | null>(null);;


export function DataProvider({ children, initialData }: { children: React.ReactNode; initialData: any }) {

    const [albums, setAlbums] = useState(initialData.albums);

    const [spotifyData, setSpotifyData] = useState(initialData.spotify);

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




