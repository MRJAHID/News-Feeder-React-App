import useNewsQuery from "../hooks/useNewsQuery.js";
import {NewsContext} from "../context/index.js";

const NewsProvider = ({children}) => {
    const {newsData, loading, error} = useNewsQuery('');

    return (
        <NewsContext.Provider value={{newsData, error, loading}}>
            {children}
        </NewsContext.Provider>
    );

}

export default NewsProvider;
