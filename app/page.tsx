
'use client';

import { useData } from "./context/DataContext";
import styles from "./page.module.css";
import RecentAlbums from "@/components/RecentAlbums";
import SpotifyTopSongs from "@/components/SpotifyTopSongs";


export default function Home() {
  const { albums, spotifyData } = useData();
 

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Home
        <RecentAlbums albums={albums || []} />
        <SpotifyTopSongs tracks={spotifyData || []} />
      </main>
    </div>
  );
}

//it seems to request the same data everytime the page loads, so i would suggest
// storing it in locale storage and checking local storage before requestin again 
// if possible?



// import styles from "./page.module.css";
// import { supabase } from "../lib/supabase"; 
// import RecentAlbums from "@/components/RecentAlbums";
// import { fetchToken } from "@/lib/spotify";
// import { fetchSpotifyData } from "@/lib/spotify";

// export default async function Home() {

//   const { data: albums, error } = await supabase.from("albums").select("*");
//   const spotify_token = await fetchToken();
//   console.log(spotify_token);
//   if(spotify_token){
//     try {
//       const spotify_data =  await fetchSpotifyData(spotify_token);
//     } catch (error) {
//      console.log(error);
//     }
//   }

//   if (error) {
//     console.error("Error fetching albums:", error);
//     return <div>Error fetching albums.</div>;
//   }

//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         Home
//         <RecentAlbums albums={albums || []} />
        
//       </main>
//     </div>
//   );
// }

//it seems to request the same data everytime the page loads, so i would suggest
// storing it in locale storage and checking local storage before requestin again 
// if possible?


