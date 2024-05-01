import {useContext} from "react";
import {NewsContext} from "../../context/index.js";
import LeftNewsItem from "./LeftNewsItem.jsx";

const LeftNewsBoard = () => {
    const {newsData} = useContext(NewsContext);
    return (
        <div
            className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8"
        >

            {newsData.map((article, index) => (
                <LeftNewsItem index={index} key={index} article={article} />
            ))}

        </div>
    );
};

export default LeftNewsBoard;
