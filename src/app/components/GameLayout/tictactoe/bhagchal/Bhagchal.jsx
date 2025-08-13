'use client';
import './Bhagchal.css';

export default function BhagchalLayout() {
    return (
        <>
        <div className="game-board" id="board">
                    <canvas id="bhagchal-board" className="canvas" width="200" height="200"></canvas>
                </div>
        </>
    );
}