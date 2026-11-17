/* ======================================================
    Lab 8 - Header.jsx
====================================================== */

export default function Header({ title, searchTerm }) {
    /* TODO 12: Create the entire Header component.*/
    return (
        <header className="hero">
            <h1>{title}</h1>
            <p>
                Search the OMDb database for movies and build your own watchlist.
            </p>
            <p className="heroMeta">
                Current search: <strong>{searchTerm}</strong>
            </p>
        </header>
    );
}