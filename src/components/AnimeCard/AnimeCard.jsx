import "./AnimeCard.css";
// import { Link } from "react-router-dom";

export default function AnimeCard({ anime }) {
    return (
        // <Link to {`/anime/${(anime.title)}`}>
            <div className="card">
                <img src={anime.images} alt="Main Picture" />
                <div className="container">
                    <h4>{anime.title}</h4>
                    <p>Rating: {anime.rating}</p>
                    <p>Synopsis: {anime.synopsis}</p>
                </div>
            </div>
        // </Link>
    )
}