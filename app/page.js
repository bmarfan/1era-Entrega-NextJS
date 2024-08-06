import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Productos/Header";
import HeaderIndex from "./components/Index/HeaderIndex";
import IndexMenu from "./components/Index/IndexMenu";
import { Metadata } from 'next'
 
export const metadata = {
    title: 'PaperCraft Libreria',
  }

export default function Home() {

  return (
    <div>
        <HeaderIndex/>
        <IndexMenu/>
    </div>
  );
}
