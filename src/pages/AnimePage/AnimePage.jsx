import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as animeAPI from "../../utilities/anime-api";

export default function AnimePage() {
    const [anime, setAnime] = useState();
    const { mal_id } = useParams();

    useEffect(() => {
        console.log(`mal_id is ${mal_id}`);
        async function loadDetails() {
            let animeDetails = await animeAPI.animeDetail(mal_id);
            console.log(`animeDetails is ${animeDetails}`);
            setAnime(animeDetails);
        }
        loadDetails();
        console.log(`anime is ${anime}`);
        // eslint-disable-next-line
    }, []);

    return (
        <> {anime ? <section>{

            <div className="card">
                <img src={anime.images} alt="Main" />
                <div className="container">
                    <h2>{anime.title}</h2>
                    <p>Rating: {anime.rating}</p>
                    <p>Synopsis: {anime.synopsis}</p>
                </div>
            </div>
        }</section> : <></>}
        </>
    )
}