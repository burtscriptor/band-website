export interface  AlbumType {
    id: number;
    title: string;
    released: string;
    recorded: string;
    creative_process: string;
    recording_technique: string;
    recorded_at: string;
    personell: string;
    notes: string;
    cover_url:string;
}

export interface SpotifyTrack {
    name: string;
    album: {
        name: string;
        images: { url: string }[];
    };
    external_urls: {
        spotify: string;
    };
}

export interface FilteredTrack {
    name: string;
    album: string;
    image: string;
    url: string;
}

export interface SpotifyResponse {
    tracks: SpotifyTrack[];
}

