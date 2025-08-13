'use client';
import Tictactoe from '@/app/components/GameLayout/tictactoe/tictactoe';
import Navbar from '@/app/components/Navbar/Navbar';
import Button from '@/app/components/Button/Button';
import './game-layout.css';
import ScoreBoard from '@/app/components/ScoreBoard/ScoreBoard';
import GameInfo from '@/app/components/GameInfo/GameInfo';
import StatusDiv from '@/app/components/Status/Status';

export default function Gamepage() {
    return (
        <>
            <Navbar />
            <div className="game-container">
                <div className="game-board-section">
                    <div className="board-container">
                        <StatusDiv label="Player X's turn"/>
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