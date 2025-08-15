'use client';
import Button from "@/app/components/Button/Button";
import GameInfo from "@/app/components/GameInfo/GameInfo";
import Navbar from "@/app/components/Navbar/Navbar";
import StatusDiv from "@/app/components/Status/Status";
import "./game-layout.css";
import Tictactoe from "../tictactoe/tictactoe";
import { useParams } from "next/navigation";


export default function GameLayout() {
    const {id} = useParams();
    return (
        <>
            <Navbar />
            <div className="game-container">
                <div className="game-board-section">
                    <div className="board-container">
                        <StatusDiv label={`${id} turn`}/>
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