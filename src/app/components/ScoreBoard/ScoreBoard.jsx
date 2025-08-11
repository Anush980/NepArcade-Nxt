'use client';
import './ScoreBoard.css';

export default function ScoreBoard() {
    return (
        <div className="scoreboard">
            <div className="player-score">
                <span>Player X</span>
                <span className='score x-score'>0</span>
            </div>
            <div className="player-score">
                <span>Player O</span>
                <span className='score o-score'>2</span>
            </div>
        </div>
    );
}