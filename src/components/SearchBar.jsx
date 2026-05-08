import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <div className="border border-gray-500 rounded-t-lg p-6 bg-white">

                <input
                    type="text"
                    placeholder="Search Projects"
                    value={searchTerm}
                    onChange={handleChange}
                    className="w-full border border-gray-500 rounded-lg p-4 text-2xl"
                />

            </div>
        </>
    );
}

export default SearchBar;