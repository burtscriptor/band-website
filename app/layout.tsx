import { DataProvider } from "./context/DataContext";
import { supabase } from "../lib/supabase"; 
import { getSpotifyData } from "@/lib/spotify";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


async function fetchData() {
  try {
    const { data: albums } = await supabase.from("albums").select("*");
    const { data: personnel } = await supabase.from("personnel").select("*");
    const spotify = await getSpotifyData();
    console.log(personnel)
    return { albums, personnel, spotify };

  } catch (error) {
    console.error("Supabase Error:", error);
  }
};

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
