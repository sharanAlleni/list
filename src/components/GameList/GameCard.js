// src/components/GameList/GameCard.js
import React from 'react';
import './GameList.css';

const GameCard = ({ game }) => {
    const platforms = game.parent_platforms.map(p => p.platform.slug); // Extract platform slugs

    return (
        <div className="game-card">
            <img src={game.background_image} alt={game.name} className="game-image" />
            <div className="game-info">
                <button className="add-to-cart-btn">Add to cart +</button>
                <p className="game-title">{game.name}</p>
                <p className="game-price">${game.price ? game.price : 'N/A'}</p>
                <div className="game-platforms">
                    {platforms.map(platform => (
                        <span key={platform} className={`platform-icon ${platform}`}>
                            {/* Render platform-specific icons based on the platform slug */}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GameCard;
