'use client';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './GameInfo.css';

export default function GameInfo() {
    return (
        <div className="game-info">
            <div className="game-title">
                <h1>Tic Tac Toe</h1>
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
                    <li>The game is played on a 3x3 grid.</li>
                    <li>Player X goes first, followed by Player O.</li>
                    <li>Take turns marking empty squares.</li>
                    <li>The first player to get 3 marks in a row wins.</li>
                    <li>If all squares are filled without a winner, it's a draw.</li>
                </ol>
            </div>
        </div>
    );
}