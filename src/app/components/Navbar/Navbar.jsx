'use client';
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import './Navbar.css';

export default function Navbar() {
    // State for mobile menu toggle
    const [menuOpen, setMenuOpen] = useState(false);
    // State for search input value
    const [searchQuery, setSearchQuery] = useState("");

    // Get current URL path
    const pathname = usePathname();

    // Toggle mobile menu
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Mobile Hamburger Button */}
                <div
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </div>

                {/* Logo */}
                <div className="logo">
                    <h1>NepArcade</h1>
                </div>

                {/* Navigation Links */}
                <div className={`links ${menuOpen ? "mobile-menu open" : "mobile-menu"}`}>
                    <ul>
                        <li>
                            <Link href="/" onClick={() => setMenuOpen(false)}>
                                <span className={pathname === "/" ? "active" : ""}>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/favourites" onClick={() => setMenuOpen(false)}>
                                <span className={pathname === "/favourites" ? "active" : ""}>Favourites</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/friends" onClick={() => setMenuOpen(false)}>
                                <span className={pathname === "/friends" ? "active" : ""}>Friends</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Search Box - Visible on desktop, hidden on mobile */}
                <div className="search">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Fullscreen Button */}
                <div className="fullscreen">
                    <button className="fullscreen-btn">

                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>

                        Fullscreen
                    </button>
                </div>

                {/* User Account */}
                <div className="account">
                    <div className="account-container">
                        AS
                    </div>
                </div>
            </div>
        </nav>
    );
}