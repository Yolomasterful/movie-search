/* ======================================================
    Lab 8 - MovieGrid.jsx
====================================================== */

import MovieCard from "./MovieCard.jsx";

export default function MovieGrid({ movies, addToWatchlist }) {
    return (
        <div className="grid">
            {/* TODO 16:  */}
            {movies.map((movie) => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    addToWatchlist={addToWatchlist}
                />
            ))}
        </div>
    );
} 