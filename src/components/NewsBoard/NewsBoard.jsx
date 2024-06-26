import LeftNewsItem from "./LeftNewsItem.jsx";
import {useContext} from "react";
import {NewsContext} from "../../context/index.js";
import RightNewsItem from "./RightNewsItem.jsx";

const NewsBoard = () => {
    const {newsData, searchNewsData, categoryNewsData, loading} = useContext(NewsContext);

    // Determine which data to use based on availability
    let dataToRender = categoryNewsData.length > 0 ? categoryNewsData : (searchNewsData.length > 0 ? searchNewsData : newsData);


    // Divide the data into two halves
    const splitIndex = Math.ceil(dataToRender.length / 2);
    const leftNews = dataToRender.slice(0, splitIndex);
    const rightNews = dataToRender.slice(splitIndex);

    return (
        <>
            {loading.state ? (

                // Loading Design
                <div role="status"
                     className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                    <div
                        className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path
                                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>

            ) : (

                // Main NewsBoard
                <main className="my-10 lg:my-14 px-4">
                    <div className="container mx-auto grid grid-cols-12 gap-8">
                        {/* LeftNewsBoard */}
                        <div
                            className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8"
                        >


                            {leftNews.map((article, index) => (
                                <LeftNewsItem index={index} key={index} article={article}/>
                            ))}

                        </div>

                        {/* RightNewsBoard */}
                        <div className="col-span-12 self-start xl:col-span-4">
                            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">

                                {rightNews.map((article, index) => (
                                    <RightNewsItem index={index} key={index} article={article}/>
                                ))}

                            </div>
                        </div>
                    </div>
                </main>

            )}
        </>

    );
};

export default NewsBoard;
