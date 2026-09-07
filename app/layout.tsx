
import { DataProvider } from "./context/DataContext";
import { supabase } from "../lib/supabase";
import { getSpotifyData } from "@/lib/spotify";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;


async function fetchData() {
  try {
    const { data: albums, error } = await supabase.from("albums").select("*").order('id', { ascending: true });
    if (error) console.error("Supabase Error:", error);
    const spotify = await getSpotifyData();
    return { albums, spotify };

  } catch (error) {
    console.error("Supabase Error:", error);
  }
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const initialData = await fetchData();

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Ultra&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavBar />
        <DataProvider initialData={initialData}>{children}</DataProvider>
        <Footer />
      </body>
    </html>
  );
}
