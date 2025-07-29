"use client";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import { use } from "react";
import Banner from "./components/Banner/Banner";


export default function Home() {
  return (
  <>
  <Navbar/>
<Banner/>
  </>
  );
}
