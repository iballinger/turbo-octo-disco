import "./AnimeCard.css";
import { Link } from "react-router-dom";

export default function AnimeCard({ anime }) {
    return (
        <div className="card">
            <img src={anime.images} alt="Main Picture" />
            <div className="container">
                <Link to={`/anime/${(anime.mal_id)}`}>
                    <h4>{anime.title}</h4>
                </Link>
                <p>Rating: {anime.rating}</p>
                <p>Synopsis: {anime.synopsis}</p>
            </div>
        </div>
    )
}