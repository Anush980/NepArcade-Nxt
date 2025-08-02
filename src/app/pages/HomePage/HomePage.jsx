'use client';

import Banner from "@/app/components/Banner/Banner";
import GameList from "@/app/components/GameList/GameList";
import SideBar from "@/app/components/SideBar/SideBar";
import './HomePage.css';

export default function HomePage() {
    return (
        <>
            <Banner />
            <div className="homepage">
                <aside className="sidebar">
                    <SideBar />
                </aside>
                <main className="main-content">
                    <GameList />
                </main>
            </div>
        </>
    );
}
