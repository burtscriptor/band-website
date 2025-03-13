'use client';
import { supabase } from "../../lib/supabase"; 
import { createContext, useContext, useState } from 'react';

const DataContext = createContext<{
    albums: any[]; 
    setAlbums: (albums: any[]) => void;
    spotifyData: any;
    setSpotifyData: (data: any) => void;
} | null>(null);;

export function DataProvider({ children, initialData }: { children: React.ReactNode; initialData: any }) {
   
    const [albums, setAlbums] = useState(initialData.albums);
  
    const [spotifyData, setSpotifyData] = useState(initialData.spotify);
    
    return <DataContext.Provider value={{ albums, setAlbums, spotifyData, setSpotifyData }}>{children}</DataContext.Provider>
};

export function useData(){
    return useContext(DataContext);
};


export function generateLocations(){
    const {albums} = useData();

    if(!albums) return [];
    
   const result = albums.reduce((acc: string[], album)=>{
        if(!acc.includes[album.recorded_at]){
            acc.push(album.recorded_at)
            return acc;
        }
    }, [])
    return result;
};

// function to search through albums but musician

export const fetchAlbumByPersonnel= async()=>{
    // so we will search by indivudal which ablums are jack on - param 1
    // and by core so which albums have the core on param 2

    // if params 1 true do this if params 2 true then this
    // leave this for now until i build up the search component
    try {
        const { data: albums, error } = await supabase
        .from("album_personnel")
        .select("albums(id),personnel(name)")  // Fetch album details
        .eq("personnel_id", 1);

        console.log("filtered", albums)
        
    } catch  (error) { 
    console.error("Supabase Error:", error) 
        
    }

};
fetchAlbumByPersonnel();

// need to leverage types?