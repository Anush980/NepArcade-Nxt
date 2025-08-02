'use client';
import './GameList.css';
import GameCard from "../GameCard/GameCard";
import gamecardData from "@/data/gamecardData";

export default function GameList() {
    return (
        <div className="game-list">
            {gamecardData.map(game => (
                <GameCard
                    key={game.id}
                    image={game.image}
                    gameTitle={game.gameTitle}
                    gameDuration={game.gameDuration}
                    playerCount={game.playerCount} />
            ))}
        </div>
    );
}