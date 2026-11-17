/* ======================================================
    Lab 8 - MovieCard.jsx
====================================================== */

export default function MovieCard({ movie, addToWatchlist }) {
    const posterAvailable = movie.Poster && movie.Poster !== "N/A";

    return (
        <article className="card">
            {posterAvailable ? (
                <img src={movie.Poster} alt={movie.Title} />
            ) : (
                <div className="noPoster">No Poster</div>
            )}

            <div className="cardContent">
                {/* TODO 17: */}
                <h3>{movie.Title}</h3>
                {/* TODO 18:  */}
                <p>
                    {movie.Year} &ndash; {movie.Type}
                </p>
                {/* TODO 19:*/}
                <button type="button" className="primary" onClick={() => addToWatchlist(movie)}>
                    Add to Watchlist
                </button>
            </div>
        </article>
    );
} 