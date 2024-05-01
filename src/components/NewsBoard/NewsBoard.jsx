import LeftNewsBoard from "./LeftNewsBoard.jsx";
import RightNewsBoard from "./RightNewsBoard.jsx";

const NewsBoard = () => {
    return (
        <main className="my-10 lg:my-14 px-4">
            <div className="container mx-auto grid grid-cols-12 gap-8">
                <LeftNewsBoard/>
                <RightNewsBoard/>
            </div>
        </main>
    );
};

export default NewsBoard;
