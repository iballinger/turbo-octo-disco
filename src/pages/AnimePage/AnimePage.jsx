import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as animeAPI from "../../utilities/anime-api";

export default function AnimePage() {
    const [anime, setAnime] = useState();
    const { malId } = useParams();

    useEffect(() => {
        async function loadDetails() {
            let animeDetails = await animeAPI.animeDetail(malId);
            setAnime(animeDetails);
        }
        loadDetails();
        console.log(anime);
    }, []);

    return (
        <> {anime ? <section>{

            <div className="card">
                <img src={anime.images} alt="Main Picture" />
                <div className="container">
                    <h4>{anime.title}</h4>
                    <p>Rating: {anime.rating}</p>
                    <p>Synopsis: {anime.synopsis}</p>
                </div>
            </div>
        }</section> : <></> }
        </>
    )
}