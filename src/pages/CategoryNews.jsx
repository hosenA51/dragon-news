import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData()
    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">Dragon News Home</h2>
            <div className="flex flex-col gap-8">
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;