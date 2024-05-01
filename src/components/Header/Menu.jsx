import {useContext} from "react";
import {NewsContext} from "../../context/index.js";

const Menu = () => {
    const { fetchDataFromCategory} = useContext(NewsContext);

    return (
        <div className="container mx-auto mt-6">
            <ul
                className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base"
            >
                <li><a onClick={() => fetchDataFromCategory('general')} href="#">General</a></li>
                <li><a onClick={() => fetchDataFromCategory('business')} href="#">Business</a></li>
                <li><a onClick={() => fetchDataFromCategory('entertainment')} href="#">Entertainment</a></li>
                <li><a onClick={() => fetchDataFromCategory('health')} href="#">Health</a></li>
                <li><a onClick={() => fetchDataFromCategory('science')} href="#">Science</a></li>
                <li><a onClick={() => fetchDataFromCategory('sports')} href="#">Sports</a></li>
                <li><a onClick={() => fetchDataFromCategory('technology')} href="#">Technology</a></li>
            </ul>
        </div>
    );
};

export default Menu;
