import { useState, useEffect } from 'react';
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import * as animeAPI from "../../utilities/anime-api";

export default function SeasonalAnime() {
    const [seasonalAnimeList, setSeasonalAnimeList] = useState([]);

    async function getSeasonals() {
        const seasonalAnime = await animeAPI.seasonalAnime();
        setSeasonalAnimeList(seasonalAnime);
    }

    useEffect(() => {
        getSeasonals();
    }, []);

    return (
        <section>
            {seasonalAnimeList.map(
                (anime, index) => (<AnimeCard anime={anime} key={index} />)
            )}
        </section>
    )
}