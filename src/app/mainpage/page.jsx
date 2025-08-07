'use client';
import './mainpage.css';

export default function MainPage() {
    return (
        <>
            <header>
                <a href="/" class="logo">
                    <h2>NepArcade</h2>
                </a>
                <nav>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#opensource">Open Source</a></li>
                        <li><a href="https://github.com/Anush980/NepArcade-Nxt" target="_blank">GitHub</a></li>
                    </ul>
                </nav>
                <div class="auth-buttons">
                    <a href="/login" class="btn btn-login">Log In</a>
                    <a href="/register" class="btn btn-signup">Sign Up</a>
                </div>
            </header>

            <section class="hero">
                <div>
                    <h1>Play & Build Nepali Games Online</h1>
                    <p>NepArcade is an open-source platform where you can play classic Nepali-inspired games or contribute your own creations. Join our growing community of players and developers!</p>
                    <div class="btn-container">
                        <a href="/homepage" class="btn btn-primary">Play Games</a>
                        <a href="#opensource" class="btn btn-secondary">Contribute</a>
                    </div>
                </div>
            </section>

            <section class="features" id="features">
                <h2 class="section-title">Why NepArcade?</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">🎯</div>
                        <h3 class="feature-title">Classic Nepali Games</h3>
                        <p class="feature-desc">Experience nostalgic Nepali games from your childhood, now available to play online anytime, anywhere.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">👨‍💻</div>
                        <h3 class="feature-title">Open Platform</h3>
                        <p class="feature-desc">Developers can submit their own games to be featured on the platform after review.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🌐</div>
                        <h3 class="feature-title">Community Driven</h3>
                        <p class="feature-desc">A growing community of game enthusiasts and developers shaping the future of Nepali gaming.</p>
                    </div>
                </div>
            </section>

            <section class="open-source" id="opensource">
                <h2>Open Source Project</h2>
                <p>NepArcade is completely open-source, built by the community for the community. We welcome developers to contribute to the platform or submit their own games for inclusion.</p>
                <p>All games go through a review process to ensure quality and appropriateness before being added to the platform.</p>
                <a href="https://github.com/Anush980/NepArcade-Nxt" class="github-btn" target="_blank">
                    <i class="fab fa-github github-icon"></i>
                    View on GitHub
                </a>
            </section>

            <section class="creator">
                <p>Created with ❤️ by <a href="https://github.com/Anush980" target="_blank">Anush</a></p>
                <p>Join us in building the best Nepali gaming platform!</p>
            </section>
        </>
    );
}