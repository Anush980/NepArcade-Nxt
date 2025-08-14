'use client';
import Button from "../Button/Button";
import GameInfo from "../GameInfo/GameInfo";
import BhagchalLayout from "../components/GameLayout/tictactoe/bhagchal/Bhagchal";
import Navbar from "../Navbar/Navbar";
import StatusDiv from "../Status/Status";
import "./game-layout.css";


export default function GameLayout() {
    return (
        <>
            <Navbar />
            <div className="game-container">
                <div className="game-board-section">
                    <div className="board-container">
                        <StatusDiv label="Player X's turn" />
                        <BhagchalLayout />
                        <div className="game-controls">
                            <Button varient='primary' label='New Game' />
                        </div>
                    </div>
                </div>

                <div className="game-info-section">

                </div>
            </div>
        </>
    );
}