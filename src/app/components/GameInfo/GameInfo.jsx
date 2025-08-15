'use client';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './GameInfo.css';
import gameRules from '@/data/gameRules';

export default function GameInfo({ gameId }) {
    // Find the game object from the array
    const game = gameRules.find(g => g.id === gameId);

    // If game not found, show a fallback message
    if (!game) {
        return <div className="game-info">Game not found.</div>;
    }

    return (
        <div className="game-info">
            <div className="game-title">
                <h1>{game.title}</h1>
            </div>

            <ScoreBoard />

            <div className="player-selection">
                <div className="player-option active">
                    <h3>Play vs Computer</h3>
                </div>
                <div className="player-option">
                    <h3>Play vs Human</h3>
                </div>
                <div className="player-option">
                    <h3>Play Online</h3>
                </div>
            </div>

            <div className="how-to-play">
                <h2>How to Play</h2>
                <ol>
                    {game.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
