'use client';
import './ScoreBoard.css';

export default function ScoreBoard() {
    return (
        <div className="scoreboard">
            <div className="player-score">
                <span>Human</span>
                <span className='score o-score'>99</span>
            </div>
            <div className="player-score">
                <span>Computer</span>
                <span className='score x-score'>199</span>
            </div>
        </div>
    );
}