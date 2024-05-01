import {useContext} from "react";
import RightNewsItem from "./RightNewsItem.jsx";
import {NewsContext} from "../../context/index.js";


const RightNewsBoard = () => {

    const {newsData} = useContext(NewsContext);

    return (
        <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                {/* Render RightNewsItem for each article */}
                {newsData.map((article, index) => (
                    <RightNewsItem index={index} key={index} article={article} />
                ))}

            </div>
        </div>

    );

}


export default RightNewsBoard;
