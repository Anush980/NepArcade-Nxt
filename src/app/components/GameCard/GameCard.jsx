'use client';
import Button from '../Button/Button';
import './GameCard.css';

export default function ComponentName({image,gameTitle,gameDescription}) {
    return (
        <div className="game-card">
            <div className="game-image">
                <img
                    src="Resources/Game-logo/bhagchalLogo.png"
                    style="width: 160px; margin-left: 22%"
                />
            </div>
            <div className="game-info">
                <h3 className="game-title">Bhagchal</h3>
                <div className="game-description">
                    <span>⏱️ 30 min</span>
                    <span>👥 2 players</span>
                </div>
                <Button label='Play Now' varient='primary'/>
            </div>
        </div>
    );
}