import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCard = (props = {}) => {
    const { news } = props || {};

    return (
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            {/* Author Section */}
            <div className="flex items-center p-4 bg-[#F3F3F3]">
                <img
                    src={news?.author?.img || 'https://via.placeholder.com/40'}
                    alt={news?.author?.name || 'Unknown Author'}
                    className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                    <h2 className="font-bold">{news?.author?.name || 'Unknown Author'}</h2>
                    <p className="text-gray-500 text-sm">
                        {news?.author?.published_date ? news.author.published_date.split(' ')[0] : 'N/A'}
                    </p>
                </div>
                <div className="flex items-center ml-auto text-gray-500">
                    <FaBookmark className="mr-3 cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Article Title */}
            <div className="p-4 pt-0">
                <h3 className="text-lg font-semibold mt-4">
                    {news?.title || 'Untitled'}
                </h3>
            </div>

            {/* Thumbnail */}
            <img
                src={news?.image_url || 'https://via.placeholder.com/600x400'}
                alt={news?.title || 'Untitled'}
                className="w-full object-cover rounded-none"
            />

            {/* Details */}
            <div className="p-4 text-gray-700">
                <p className="text-sm mb-4">
                    {news?.details ? `${news.details.substring(0, 150)}...` : 'No details available.'} 
                    <span className="text-red-500 cursor-pointer">Read More</span>
                </p>
            </div>

            {/* Rating and Views */}
            <div className="flex items-center justify-between p-4 border-t border-gray-200">
                <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={`text-yellow-400 ${index < Math.round(news?.rating?.number || 0) ? '' : 'text-gray-300'}`}
                        />
                    ))}
                    <span className="ml-2 font-bold text-gray-700">{news?.rating?.number || '0'}</span>
                </div>
                <div className="flex items-center text-gray-500">
                    <FaEye className="mr-1" />
                    <span>{news?.total_view || '0'}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
