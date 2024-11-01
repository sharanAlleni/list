// src/components/GameList/GameList.js
import React, { useEffect, useState } from 'react';
import './GameList.css';
import GameCard from './GameCard';
import { fetchGames } from '../../services/rawgApi';

const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const loadGames = async () => {
            const fetchedGames = await fetchGames();
            console.log("Fetched games:", fetchedGames); // Log the data here
            setGames(fetchedGames);
        };
        loadGames();
    }, []);

    return (
        <div className="game-list-container">
            <h2 className="list-title">All time top</h2>
            <div className="game-list">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
};

export default GameList;
