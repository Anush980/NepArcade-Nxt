'use client';
import Navbar from '@/app/components/Navbar/Navbar';
import './tictactoe.css';

export default function Tictactoe() {
    return (
        <>
            {/* <Navbar /> */}
            <div className="main-container">
                <div className="left-layout">
                    <div className="board-section">
                        <div className="scoreboard">
                            <div className="player-1">
                                <span>Player X</span>
                                <span className='x-score'>0</span>
                            </div>
                            <div className="player-2">
                                <span>Player O</span>
                                <span className='y-score'>2</span>
                            </div>
                        </div>
                        <div className="game-status">who's turn?</div>
                        <div className="game-board">
                        <div className="cell">0</div>
                        <div className="cell">1</div>
                        <div className="cell">2</div>
                        <div className="cell">3</div>
                        <div className="cell">4</div>
                        <div className="cell">5</div>
                        <div className="cell">6</div>
                        <div className="cell">7</div>
                        <div className="cell">8</div>

                        </div>
                    </div>
                </div>
                <div className="info">

                </div>
            </div>

        </>
    );
}