import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layoutComponent/RightNavbar";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    // console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="font-semibold text-xl mb-3">Dragon News</h2>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="font-bold text-[25px] mb-3">{news?.title}</h2>
                            <p className="mb-4">{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary bg-[#D72050]"><FaArrowLeft /> All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;