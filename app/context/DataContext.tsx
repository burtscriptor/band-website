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

    personnel: any[];
    setPersonnel: (personnel: any[]) => void;

    spotifyData: any;
    setSpotifyData: (data: any) => void;

} | null>(null);;


export function DataProvider({ children, initialData }: { children: React.ReactNode; initialData: any }) {

    const [albums, setAlbums] = useState(initialData.albums);

    const [filter, setFilter] = useState(false);

    const [userFilters, setUserFilters] = useState<any>({
        year: "",
        creative_process: "",
        location: "",
        recording_type: "",
        personnel: "",
    });

    const [personnel, setPersonnel] = useState(initialData.personnel);

    const [spotifyData, setSpotifyData] = useState(initialData.spotify);

    return <DataContext.Provider value={{ albums, setAlbums, filter, setFilter, userFilters, setUserFilters, personnel, setPersonnel, spotifyData, setSpotifyData }}>{children}</DataContext.Provider>
};

export function useData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};

export function generateLocations() {
    const { albums } = useData();
    if (!albums) return [];

    const result = albums.reduce((acc: string[], album) => {
        if (!acc.includes(album.location)) {
            acc.push(album.location)
        }
        return acc;
    }, [])
    return result;

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
export const SQLFilter = async (userFilters, peronnel) => {
    let query = supabase.from("albums").select("*");
    let queryWithPersonnel = supabase.from("albums").select("*, album_personnel!inner (album_id")

    if(userFilters.personnel){
        console.log("true", userFilters.personnel)
    }
    for (const filter in userFilters) {
        



        if (userFilters[filter]) {
            if (filter === "year") {
                query = query.or(
                    `released.ilike.%${userFilters[filter]}%`,
                    `recorded.ilike.%${userFilters[filter]}%`
                );
            } else if (filter === "personnel") {
                const name = userFilters[filter];
                if (name === "CORE") {
                    const CORE = COREPersonnel();
                }
                const id = findPersonnelId(name, peronnel);
                console.log(id);

            }

            else {
                query = query.eq(filter, userFilters[filter]);
            }
        }
    }
    console.log(query);
    const { data, error } = await query;

    if (error) {
        console.error("Error executing query:", error);
    } else {
        console.log("Data retrieved:", data);
    }
};

const findPersonnelId = (name, peronnel) => {

    for (let person of peronnel) {
        if (person.name === name) {
            return person.id
        }
    }
};

const COREPersonnel=()=>{
    return [1,2,3,4]
};
