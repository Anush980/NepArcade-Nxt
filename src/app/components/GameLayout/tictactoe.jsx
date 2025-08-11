'use client';
import './tictactoe/tictactoe.css';

export default function Tictactoe() {
    return (
        <div className="game-board">
            <div className="cell x"></div>
            <div className="cell o"></div>
            <div className="cell x"></div>
            <div className="cell o"></div>
            <div className="cell x"></div>
            <div className="cell o"></div>
            <div className="cell x"></div>
            <div className="cell o"></div>
            <div className="cell x"></div>

        </div>
    );
}