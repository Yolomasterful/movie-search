/* ======================================================
    Lab 8 - SearchBar.jsx
====================================================== */

import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    // TODO 13: 
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO 14: 
        if (inputValue.trim()) {
            onSearch(inputValue.trim());
            setInputValue("");
        }
    };

    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            {/* TODO 15: */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search for a movie title..."
            />
            <button type="submit" className="primary">Search Movies</button>
        </form>
    );
}