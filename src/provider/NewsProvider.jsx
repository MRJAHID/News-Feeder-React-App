import useNewsQuery from "../hooks/useNewsQuery.js";
import {NewsContext} from "../context/index.js";

const NewsProvider = ({children}) => {
    const {newsData, error, loading,} = useNewsQuery('');

    return (
        <NewsContext.Provider value={{newsData, error, loading}}>
            {children}
        </NewsContext.Provider>
    );

}

export default NewsProvider;
