'use client';
import Tictactoe from '@/app/components/GameLayout/tictactoe';
import Navbar from '@/app/components/Navbar/Navbar';
import Button from '@/app/components/Button/Button';
import './game-layout.css';
import ScoreBoard from '@/app/components/ScoreBoard/ScoreBoard';
import GameInfo from '@/app/components/GameInfo/GameInfo';

export default function Gamepage() {
    return (
        <>
            <Navbar />
            <div className="game-container">
                <div className="game-board-section">
                    <div className="board-container">
                        <div className="game-status">Player X's turn</div>
                        <Tictactoe />
                        <div className="game-controls">
                            <Button varient='primary' label='New Game' />
                        </div>
                    </div>
                </div>

                <div className="game-info-section">
                    <GameInfo />
                </div>
            </div>
        </>
    );
}