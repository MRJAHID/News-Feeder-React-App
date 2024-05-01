import LeftNewsItem from "./LeftNewsItem.jsx";
import {useContext} from "react";
import {NewsContext} from "../../context/index.js";
import RightNewsItem from "./RightNewsItem.jsx";

const NewsBoard = () => {
    const {newsData} = useContext(NewsContext);

    // Divide the news data into two halves
    const splitIndex = Math.ceil(newsData.length / 2);
    const leftNews = newsData.slice(0, splitIndex);
    const rightNews = newsData.slice(splitIndex);

    return (
        <main className="my-10 lg:my-14 px-4">
            {/*LeftNewsBoard*/}
            <div className="container mx-auto grid grid-cols-12 gap-8">
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
    );
};

export default NewsBoard;
