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
                            {Array(9).fill(null).map((_, index) => {
                                <div key={index} className='cell' data-index={index}></div>
                            })}

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}