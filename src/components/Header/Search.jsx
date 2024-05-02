import SearchIcon from '../../assets/icons/search.svg';
import { useContext, useState } from "react";
import { NewsContext } from "../../context/index.js";

const Search = () => {
    const { setSearchQuery } = useContext(NewsContext);

    const [showSearchBar, setShowSearchBar] = useState(false);
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value); // Update local query state
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchQuery(query); // Update the search query state
        setQuery(""); // Clear the query state
    };

    return (
        <div className="flex items-center space-x-3 lg:space-x-8">
            {!showSearchBar && (
                <a href="#" onClick={(event) => { event.preventDefault(); setShowSearchBar(!showSearchBar) }}>
                    <img src={SearchIcon} alt='Search Icon'/>
                </a>
            )}

            {/* Search Box */}
            {showSearchBar && (
                <form onSubmit={handleSubmit} className="flex items-center max-w-sm mx-auto">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                            </svg>
                        </div>
                        <input
                            value={query}
                            onChange={handleInputChange}
                            type="text" id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                            placeholder="Search branch name..." required/>
                    </div>
                    <button type="submit"
                            className="p-2.5 ms-2 text-sm font-medium text-white bg-slate-900 rounded-lg border border-slate-700 hover:bg-green-700 hover:border-green-700 focus:ring-2 focus:outline-none focus:ring-blue-300">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            )}
        </div>
    );
};

export default Search;
