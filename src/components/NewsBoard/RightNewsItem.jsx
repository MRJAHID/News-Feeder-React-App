import {formatDate} from "../../utils/formatDate.js";

const RightNewsItem = ({index, article}) => {

    // Format Date
    const formattedDate = formatDate(article.publishedAt);

    return (
        <>            {
            index === 0 ? (
                <div className="col-span-12 mb-6 md:col-span-8">
                    <img
                        className="w-full"
                        src={article?.urlToImage ? article.urlToImage : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrBMVlKsMHZSQwFot2MfWvO6QWrPEQBsdmJa_HT6gJA&s`}
                        alt="thumb"
                    />
                    <div className="col-span-12 mt-6 md:col-span-4">
                        <a href="#"
                        ><h3
                            className="mb-2.5 text-lg font-bold lg:text-[20px]"
                        >{article.title}
                        </h3></a
                        >
                        <p className="text-base text-[#292219]">
                            {article.description}
                        </p>
                        <p className="mt-5 text-base text-[#94908C]">
                            {formattedDate}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="col-span-12 md:col-span-4">
                    <a href="#"><h3
                        className="mb-2.5 text-lg font-bold lg:text-[20px]"
                    >
                        {article.title}
                    </h3>
                    </a>
                    <p className="text-base text-[#292219]">
                        {article.description}
                    </p>
                    <p className="mt-5 text-base text-[#94908C]">
                        {formattedDate}
                    </p>
                </div>
            )
        }
        </>
    );
};

export default RightNewsItem;
