import Image from "next/image";
import Navbar from './navbar/page'
import { AchorLink } from "./links/links";
import { HomeScreen } from "./Home/homeScreen";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-">
        < Navbar />
        <HomeScreen/>
    </main>
  );
}
