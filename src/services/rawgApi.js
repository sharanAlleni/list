// src/services/rawgApi.js
import axios from 'axios';

const API_KEY = 'd94c5b291f114dceb0b45fc40d9eddbc';  // Replace with your actual RAWG API key
const BASE_URL = 'https://api.rawg.io/api';

export const fetchGames = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/games`, {
            params: {
                key: API_KEY,
                page_size: 10,  // Adjust the number of games to fetch
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching games data:", error);
        return [];
    }
};
