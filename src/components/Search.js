import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Song1 from './song1'; // Adjust the import based on your file structure
import justin from './images/justin.jpeg'; // Adjust the import based on your file structure
import cher from './images/cher.jpeg'
import arjit from './images/arjit.jpg'
function Search() {
    const songList = [
        { image: justin, name: "Justin Bieber", details: "New" },
        { image: cher, name: "Cher", details: "New" },
        { image: arjit, name: "Arjit Singh", details: "New" },

        // Add more song objects here
    ];

    const [songs, setSongs] = useState(songList);
    const [searchVal, setSearchVal] = useState("");

    function handleSearchClick() {
        if (searchVal === "") {
            setSongs(songList);
            return;
        }
        const filteredSongs = songList.filter((song) =>
            song.name.toLowerCase().includes(searchVal.toLowerCase())
        );
        setSongs(filteredSongs);
    }

    return (
        <div className="mt-2 ml-2">
            <div className="flex ml-2">
                <input
                    className="w-1/3 rounded-full bg-zinc-700 h-9"
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                />
                <BsSearch className="cursor-pointer mt-2 ml-3 text-xl" onClick={handleSearchClick} />
            </div>
            <div className="mt-10 ml-10">
                {songs.map((song, index) => (
                    <Song1
                        key={index}
                        image={song.image}
                        name={song.name}
                        details={song.details}
                    />
                    
                ))}
                
            </div>
        </div>
    );
}

export default Search;
