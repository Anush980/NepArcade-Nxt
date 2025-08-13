'use client';
import Button from '../Button/Button';
import './GameCard.css';

export default function GameCard({ image, gameTitle, gameDuration, playerCount,onClick }) {
    return (
        <div className="game-card">
            <div className="game-image">
                <img src={image} alt={gameTitle} className="game-image-content" />
            </div>
            <div className="game-info">
                <h3 className="game-title">{gameTitle}</h3>
                <div className="game-description">
                    <span>⏱️ {gameDuration}</span>
                    <span>👥 {playerCount}</span>
                </div>
        <Button label='Play Now' varient="exploreBtn" href={onClick} />
            </div>
        </div>
    );
}
