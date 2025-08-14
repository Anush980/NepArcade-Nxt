'use client';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './GameInfo.css';
import gameRules from '@/data/gameRules';

export default function GameInfo() {
    return (
        <div className="game-info">
            <div className="game-title">
            <h1>{gameRules.title}</h1>
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
                    {gameRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
                </ol>
            </div>
        </div>
    );
}