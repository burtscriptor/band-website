import { DataProvider } from "./context/DataContext";
import { supabase } from "../lib/supabase"; 
import { getSpotifyData } from "@/lib/spotify";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


async function fetchData() {
  const { data: albums, error } = await supabase.from("albums").select("*");
  if (error) console.error("Supabase Error:", error);

  const spotify = await getSpotifyData();
  return { albums, spotify };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  const initialData = await fetchData(); 

  return (
    <html lang="en">
      <body>
        <NavBar />
        <DataProvider initialData={ initialData }>{children}</DataProvider>
        <Footer />
      </body>
    </html>
  );
};
