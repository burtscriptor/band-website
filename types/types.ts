export interface  AlbumType {
    id: number;
    title: string;
    released: string;
    recorded: string;
    creative_process: string;
    recording_technique: string;
    image_url: string;
    spotify_album_id: string;
    bandcamp_id: string;
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
    image_url: string;
    url: string;
}

export interface SpotifyResponse {
    tracks: SpotifyTrack[];
}

