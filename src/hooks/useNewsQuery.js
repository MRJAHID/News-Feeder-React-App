import {useEffect, useState} from "react";

// News Fetch Request Hook
const useNewsQuery = () => {
    // NewsData State
    const [newsData, setNewsData] = useState([]);
    const [categoryNewsData, setCategoryNewsData] = useState([]);
    const [searchNewsData, setSearchNewsData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    console.log(categoryNewsData)
    // Loading State
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });

    // Error Handling State
    const [error, setError] = useState(null);

    // Fetch NewsData
    const fetchNewsData = async () => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: 'Fetching News Data'
            })


            const response = await fetch(`http://localhost:8000/v2/top-headlines`);

            if (!response.ok) {
                const errorMessage = `Fetching News data failed: ${response.status}`;
                throw new Error(errorMessage);
            }
            const data = await response.json();

            setNewsData(data.articles)

        } catch (err) {
            setError(err);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "",
            });
        }
    }

    // Load articles on Mount
    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Finding News...",
        });

        fetchNewsData();

    }, []);


    // Fetch articles by selecting Category
    async function fetchDataFromCategory(category) {
        try {
            setLoading({
                ...loading,
                state: true,
                message: 'Fetching Category News Data'
            })

            const response = await fetch(`http://localhost:8000/v2/top-headlines?category=${category}`);

            if (!response.ok) {
                const errorMessage = `Fetching Category News data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();

            setCategoryNewsData(data.articles);

        } catch (e) {
            setError(e);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "",
            });
        }

    }

    // get News data by Search
    useEffect(() => {
        const trimmedQuery = String(searchQuery).trim();
        if (trimmedQuery !== "") {
            getNewsByTitle(trimmedQuery);
        } else {
            fetchNewsData(); // Fetch default news data if search query is empty
        }
    }, [searchQuery]);

    const getNewsByTitle = async (query = "") => {
        try {
            // Fetch news data based on the search query
            const response = await fetch(`http://localhost:8000/v2/search?q=${query}`);

            const data = await response.json();
            setSearchNewsData(data.result);
        } catch (error) {
            console.error("Error fetching news data:", error);
        }
    };

    return {
        newsData,
        error,
        loading,
        categoryNewsData,
        fetchDataFromCategory,
        getNewsByTitle,
        setSearchQuery,
        searchNewsData
    };
}

export default useNewsQuery;
