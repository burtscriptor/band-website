import { SpotifyTrack, FilteredTrack, SpotifyResponse } from "@/types/types";
import qs from "qs";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const ARTIST_ID = process.env.SPOTIFY_ARTIST_ID;
const All_ALBUMS = process.env.SPOTIFY_ALL_ALBUMS;
const TOKEN_ENDPOINT = process.env.SPOTIFY_TOKEN_ENDPOINT;

export const getSpotifyData = async(): Promise<FilteredTrack[] | null> => {
    const token = await fetchToken();

    if(!token) return null;

    try {
        const response = await fetch(ARTIST_ID, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                 "Content-Type": "application/x-www-form-urlencoded"
            },
            next: { revalidate: 3600 }
        });
       
        if (!response.ok) {
            throw new Error(`Failed to fetch Spotify data: ${response.statusText}`);
        }

        const data = await response.json();
        return filterSpotifyData(data?.tracks ?? []);

    } catch (error) {
        console.error("Error fetching artist data:", error.response?.data || error.message);
    }
};

const fetchToken = async () => { 
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`
    };
    const data = qs.stringify({ grant_type: "client_credentials" });
    try {
        const response = await fetch(TOKEN_ENDPOINT, {
            method: "POST",
            headers,
            body: data
        });
        if (!response.ok) throw new Error("Failed to fetch token");
            const result = await response.json();
            return result.access_token;
     } catch (error) {
        console.error("Error fetching token:", error.message);
    }
};

const filterSpotifyData = (spotify_data: SpotifyTrack[]): FilteredTrack[] => {
    return spotify_data.map((element) => ({
        name: element.name,
        album: element.album.name,
        image: element.album.images?.[1]?.url || element.album.images?.[0]?.url || "", 
        url: element.external_urls.spotify,
        id: element.album.id,
    }));
};

