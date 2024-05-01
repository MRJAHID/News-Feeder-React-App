import {useEffect, useState} from "react";

// News Fetch Request Hook
const useNewsQuery = (category) => {
    // NewsData State
    const [newsData, setNewsData] = useState([]);

    // Loading State
    const [loading, setLoading] = useState({
        state: true,
        message: "",
    })

    // Error Handling State
    const [error, setError] = useState(null);

    // Api Url
    const apiUrl = category
        ? `http://localhost:8000/v2/top-headlines?category=${category}`
        : `http://localhost:8000/v2/top-headlines`;

    // Fetch NewsData
    const fetchNewsData = async () => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: 'Fetching News Data'
            })


            const response = await fetch(apiUrl);

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

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Finding News...",
        });

        fetchNewsData();

    }, [apiUrl]);

    return {
        newsData,
        error,
        loading,
    };
}

export default useNewsQuery;
