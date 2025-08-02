"use client";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import { use } from "react";
import Banner from "./components/Banner/Banner";
import SideBar from "./components/SideBar/SideBar";
import GameList from "./components/GameList/GameList";


export default function Home() {
  return (
  <>
  <Navbar/>
<Banner/>
<SideBar/>
<GameList/>
  </>
  );
}
