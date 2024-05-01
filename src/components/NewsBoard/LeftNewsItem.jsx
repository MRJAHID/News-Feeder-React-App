import {formatDate} from "../../utils/formatDate.js";

const LeftNewsItem = ({index, article}) => {

    // Format Date
    const formattedDate = formatDate(article.publishedAt);

    return (
        <>
            {index === 0 || index === 1 ? (
                <div className={`col-span-12 grid grid-cols-12 gap-4 ${index === 1 && 'lg:col-span-8'}`}>
                    <div className={`col-span-12 ${index === 0 ? 'lg:col-span-4' : 'md:col-span-6'}`}>
                        <a href="#">
                            <h3 className="mb-2.5 text-lg font-bold lg:text-2xl">
                                {article.title}
                            </h3>
                        </a>
                        <p className="text-base text-[#292219]">{article.description ? article.description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto enim error itaque iusto maiores minima, molestiae non odit sed tempore ut velit. Deserunt fugit illum nulla perspiciatis repudiandae velit.'}</p>
                        <p className="mt-5 text-base text-[#5C5955]">{formattedDate}</p>
                    </div>
                    {index === 0 || index === 1 ? (
                        <div className={`col-span-12 ${index === 0 ? 'lg:col-span-8' : 'md:col-span-6'}`}>
                            <img
                                className="w-full"
                                src={article?.urlToImage ? article?.urlToImage : `https://iagre.org/kcfinder/upload/files/images/what%20is%20news.jpg`}
                                alt="thumb"
                            />
                        </div>
                    ) : null}
                </div>
            ) : (
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="col-span-12 md:col-span-4">
                        <a href="#">
                            <h3 className="mb-2.5 text-lg font-bold lg:text-2xl">
                                {article.title}
                            </h3>
                        </a>
                        <p className="text-base text-[#292219]">{article.description ? article.description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto enim error itaque iusto maiores minima, molestiae non odit sed tempore ut velit. Deserunt fugit illum nulla perspiciatis repudiandae velit.'}</p>
                        <p className="mt-5 text-base text-[#94908C]">{formattedDate}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default LeftNewsItem;
