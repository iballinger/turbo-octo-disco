import { useState } from 'react';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import * as animeAPI from "../../utilities/anime-api";

export default function SearchPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    async function handleSearch(evt) {
        evt.preventDefault();
        console.log(`handling search for "${query}"`);
        const data = await animeAPI.searchAnime(query);
        console.log(data);
        setResults(data);
    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <input type="search" placeholder="Search!" value={query} onChange={(evt) => setQuery(evt.target.value)} required></input>
                <button type="submit">go!</button>
            </form>

            {results ?
                <section>{results.map(
                    (anime, index) => (<AnimeCard anime={anime} key={index} />)
                )}</section> : <></>
            }
        </>
    )
}