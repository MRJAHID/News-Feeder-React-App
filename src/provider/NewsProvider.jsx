import useNewsQuery from "../hooks/useNewsQuery.js";
import {NewsContext} from "../context/index.js";

const NewsProvider = ({children}) => {
    const {newsData, loading, error,  categoryNewsData,
        fetchDataFromCategory, setSearchQuery, searchNewsData} = useNewsQuery();

    return (
        <NewsContext.Provider value={{newsData, loading, error,  categoryNewsData, fetchDataFromCategory, setSearchQuery, searchNewsData}}>
            {children}
        </NewsContext.Provider>
    );

}

export default NewsProvider;
