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
    bandcamp_page_url: string;
}

export interface SpotifyTrack {
    name: string;
    album: {
        id: string;
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
    id: string;
}

export interface SpotifyResponse {
    tracks: SpotifyTrack[];
}

export interface SearchBarProps {
  filterFunction: (year: string, creative_process: string, recording_technique: string) => void;
  albums: AlbumType[];          // Replace AlbumType with your album type
  filteredAlbums: AlbumType[];
  setReverse: (value: boolean) => void;
  reverse: boolean;
}

export interface DataContextType {
  albums: AlbumType[];
  spotifyData: FilteredTrack[];
}